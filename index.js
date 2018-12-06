import React from 'react';
import './shim.js';
import MainBottomTabs from './MainBottomTabs';
import { Sentry } from 'react-native-sentry';
import { AppRegistry } from 'react-native';
import WalletMigrate from './screen/wallets/walletMigrate';
import { name as appName } from './app.json';
const BlueApp = require('./BlueApp');
/** @type {AppStorage} */
Sentry.config('https://23377936131848ca8003448a893cb622@sentry.io/1295736').install();

/** @type {AppStorage} */

if (!Error.captureStackTrace) {
  // captureStackTrace is only available when debugging
  Error.captureStackTrace = () => {};
}

/** @format */

class BlueAppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMigratingData: true };
  }

  setIsMigratingData = () => {
    this.setState({ isMigratingData: false }, () => BlueApp.startAndDecrypt());
  };

  render() {
    return this.state.isMigratingData ? <WalletMigrate onComplete={this.setIsMigratingData} /> : <MainBottomTabs />;
  }
}

AppRegistry.registerComponent(appName, () => BlueAppComponent);
