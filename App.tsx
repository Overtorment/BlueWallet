import { NavigationContainer } from '@react-navigation/native';
import * as Sentry from '@sentry/react-native';
import JailMonkey from 'jail-monkey';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { View, YellowBox, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { RenderMessage, MessageType } from 'app/helpers/MessageCreator';
import { BlueApp } from 'app/legacy';
import { i18n } from 'app/locale';
import { RootNavigator } from 'app/navigators';
import { UnlockScreen } from 'app/screens';
import { SecureStorageService, AppStateManager, navigationRef } from 'app/services';
import { checkDeviceSecurity } from 'app/services/DeviceSecurityService';
import { persistor, store } from 'app/state/store';
import { isAndroid, isIos } from 'app/styles';

import config from './config';

const i18nloc = require('./loc');

YellowBox.ignoreWarnings(['VirtualizedLists should never be nested inside', `\`-[RCTRootView cancelTouches]\``]);

if (!__DEV__) {
  Sentry.init({
    dsn: config.sentryDsn,
  });
}

interface State {
  isPinSet: boolean;
  successfullyAuthenticated: boolean;
}

export default class App extends React.PureComponent<State> {
  state: State = {
    isPinSet: false,
    successfullyAuthenticated: false,
  };

  async componentDidMount() {
    await BlueApp.startAndDecrypt();

    const isPinSet = await SecureStorageService.getSecuredValue('pin');
    if (isPinSet) {
      this.setState({ isPinSet });
    }
    if (!__DEV__) {
      checkDeviceSecurity();
    }
  }

  preventOpenAppWithRootedPhone = () => {
    if (isIos()) {
      return RenderMessage({
        description: i18nloc.security.jailBrokenPhone,
        title: i18nloc.security.title,
        type: MessageType.error,
      });
    } else if (isAndroid()) {
      return RenderMessage({
        description: i18nloc.security.rootedPhone,
        title: i18nloc.security.title,
        type: MessageType.error,
      });
    }
  };

  lockScreen = () => {
    this.setState({
      successfullyAuthenticated: false,
    });
  };

  onSuccessfullyAuthenticated = () => {
    this.setState({
      successfullyAuthenticated: true,
    });
  };

  get showUnlockScreen(): boolean {
    if (__DEV__) {
      // do not check PIN during development
      return false;
    }
    const { successfullyAuthenticated, isPinSet } = this.state;
    return isPinSet && !successfullyAuthenticated;
  }

  render() {
    const isBiometricEnabledByUser = store.getState().appSettings.isBiometricsEnabled;
    if (!__DEV__ && JailMonkey.isJailBroken()) {
      return this.preventOpenAppWithRootedPhone();
    }
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <AppStateManager handleAppComesToBackground={this.lockScreen} />
          <PersistGate loading={null} persistor={persistor}>
            <View style={styles.wrapper}>
              <NavigationContainer ref={navigationRef as any}>
                <RootNavigator />
                {this.showUnlockScreen && (
                  <UnlockScreen
                    onSuccessfullyAuthenticated={this.onSuccessfullyAuthenticated}
                    isBiometricEnabledByUser={isBiometricEnabledByUser}
                  />
                )}
              </NavigationContainer>
            </View>
          </PersistGate>
        </Provider>
      </I18nextProvider>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
