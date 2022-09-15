/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import type {Store} from '../reducers/index';
import {
  InstalledPluginDetails,
  Logger,
  MarketplacePluginDetails,
  wrapRequire,
} from 'flipper-common';
import {PluginDefinition} from '../plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';
import ReactIs from 'react-is';
import {
  registerPlugins,
  addGatekeepedPlugins,
  addDisabledPlugins,
  addFailedPlugins,
  registerLoadedPlugins,
  registerMarketplacePlugins,
  pluginsInitialized,
} from '../reducers/plugins';
import {FlipperBasePlugin} from '../plugin';
import {ActivatablePluginDetails} from 'flipper-common';
import * as FlipperPluginSDK from 'flipper-plugin';
import {_SandyPluginDefinition} from 'flipper-plugin';
import * as Immer from 'immer';
import * as antd from 'antd';
import * as emotion_styled from '@emotion/styled';
import * as antdesign_icons from '@ant-design/icons';
import isPluginCompatible from '../utils/isPluginCompatible';
import {createSandyPluginWrapper} from '../utils/createSandyPluginWrapper';
import {
  AbstractPluginInitializer,
  getRenderHostInstance,
  setGlobalObject,
  isSandyPlugin,
  wrapRequirePlugin,
} from 'flipper-frontend-core';
import * as deprecatedExports from '../deprecated-exports';
import {getAppVersion} from '../utils/info';

class UIPluginInitializer extends AbstractPluginInitializer {
  constructor(private readonly store: Store) {
    super();
  }

  async init() {
    await super.init();

    const classicPlugins = this._initialPlugins.filter(
      (p) => !isSandyPlugin(p.details),
    );
    if (
      getRenderHostInstance().serverConfig.env.NODE_ENV !== 'test' &&
      classicPlugins.length
    ) {
      console.warn(
        `${
          classicPlugins.length
        } plugin(s) were loaded in legacy mode. Please visit https://fbflipper.com/docs/extending/sandy-migration to learn how to migrate these plugins to the new Sandy architecture: \n${classicPlugins
          .map((p) => `${p.title} (id: ${p.id})`)
          .sort()
          .join('\n')}`,
      );
    }

    this.store.dispatch(registerLoadedPlugins(this.loadedPlugins));
    this.store.dispatch(addGatekeepedPlugins(this.gatekeepedPlugins));
    this.store.dispatch(addDisabledPlugins(this.disabledPlugins));
    this.store.dispatch(addFailedPlugins(this.failedPlugins));
    this.store.dispatch(registerPlugins(this._initialPlugins));
    this.store.dispatch(pluginsInitialized());
  }

  protected async getFlipperVersion() {
    return getAppVersion();
  }

  public requirePluginImpl(pluginDetails: ActivatablePluginDetails) {
    return requirePluginInternal(pluginDetails);
  }

  protected loadMarketplacePlugins() {
    const marketplacePlugins = selectCompatibleMarketplaceVersions(
      this.store.getState().plugins.marketplacePlugins,
    );
    this.store.dispatch(registerMarketplacePlugins(marketplacePlugins));
  }

  protected loadUninstalledPluginNames() {
    return this.store.getState().plugins.uninstalledPluginNames;
  }
}

declare module globalThis {
  let require: any;
}

let uiPluginInitializer: UIPluginInitializer;
export default async (store: Store, _logger: Logger) => {
  setGlobalObject({
    React,
    ReactDOM,
    ReactDOMClient,
    ReactIs,
    Flipper: deprecatedExports,
    FlipperPlugin: FlipperPluginSDK,
    Immer,
    antd,
    emotion_styled,
    antdesign_icons,
  });
  // Whenever we bundle plugins, we assume that they are going to share some modules - React, React-DOM, ant design and etc.
  // It allows us to decrease the bundle size and not to create separate React roots for every plugin
  // To tell a plugin that a module is going to be provided externally, we add the module to the list of externals (see https://esbuild.github.io/api/#external).
  // As a result, esbuild does not bundle hte contents of the module. Instead, it wraps the module name with `require(...)`.
  // `require` does not exist ion the browser environment, so we substitute it here to feed the plugin our global module.
  globalThis.require = wrapRequire(
    // globalThis.require might exist in the electron build
    globalThis.require ??
      ((module: string) => {
        throw new Error(
          `Dynamic require is not supported in browser envs. Tried to require: ${module}`,
        );
      }),
  );

  uiPluginInitializer = new UIPluginInitializer(store);
  await uiPluginInitializer.init();
};

export const requirePlugin = (pluginDetails: ActivatablePluginDetails) =>
  wrapRequirePlugin(
    uiPluginInitializer!.requirePluginImpl.bind(uiPluginInitializer),
  )(pluginDetails);

export const requirePluginInternal = async (
  pluginDetails: ActivatablePluginDetails,
): Promise<PluginDefinition> => {
  let plugin = await getRenderHostInstance().requirePlugin(
    (pluginDetails as InstalledPluginDetails).entry,
  );
  if (!plugin) {
    throw new Error(
      `Failed to obtain plugin source for: ${pluginDetails.name}`,
    );
  }
  if (isSandyPlugin(pluginDetails)) {
    // Sandy plugin
    return new _SandyPluginDefinition(pluginDetails, plugin);
  } else {
    // classic plugin
    if (plugin.default) {
      plugin = plugin.default;
    }
    if (plugin.prototype === undefined) {
      throw new Error(
        `Plugin ${pluginDetails.name} is neither a class-based plugin nor a Sandy-based one.
        Ensure that it exports either a FlipperPlugin class or has flipper-plugin declared as a peer-dependency and exports a plugin and Component.
        See https://fbflipper.com/docs/extending/sandy-migration/ for more information.`,
      );
    } else if (!(plugin.prototype instanceof FlipperBasePlugin)) {
      throw new Error(
        `Plugin ${pluginDetails.name} is not a FlipperBasePlugin`,
      );
    }

    if (plugin.id && pluginDetails.id !== plugin.id) {
      console.error(
        `Plugin name mismatch: Package '${pluginDetails.id}' exposed a plugin with id '${plugin.id}'. Please update the 'package.json' to match the exposed plugin id`,
      );
    }
    plugin.id = plugin.id || pluginDetails.id;
    plugin.packageName = pluginDetails.name;
    plugin.details = pluginDetails;

    return createSandyPluginFromClassicPlugin(pluginDetails, plugin);
  }
};

export function createSandyPluginFromClassicPlugin(
  pluginDetails: ActivatablePluginDetails,
  plugin: any,
) {
  pluginDetails.id = plugin.id; // for backward compatibility, see above check!
  return new _SandyPluginDefinition(
    pluginDetails,
    createSandyPluginWrapper(plugin),
  );
}

export function selectCompatibleMarketplaceVersions(
  availablePlugins: MarketplacePluginDetails[],
): MarketplacePluginDetails[] {
  const plugins: MarketplacePluginDetails[] = [];
  for (const plugin of availablePlugins) {
    if (!isPluginCompatible(plugin)) {
      const compatibleVersion =
        plugin.availableVersions?.find(isPluginCompatible) ??
        plugin.availableVersions?.slice(-1).pop();
      if (compatibleVersion) {
        plugins.push({
          ...compatibleVersion,
          availableVersions: plugin?.availableVersions,
        });
      } else {
        plugins.push(plugin);
      }
    } else {
      plugins.push(plugin);
    }
  }
  return plugins;
}
