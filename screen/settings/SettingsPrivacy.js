import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableWithoutFeedback, StyleSheet, Linking } from 'react-native';
import { BlueTextHooks, BlueSpacing20, BlueListItem, BlueNavigationStyle, BlueCard } from '../../BlueComponents';
import { useTheme } from '@react-navigation/native';
import loc from '../../loc';
import AppStateChange from '../../blue_modules/appStateChange';
import DeviceQuickActions from '../../class/quick-actions';
const BlueApp = require('../../BlueApp');

const SettingsPrivacy = () => {
  const { colors } = useTheme();
  const sections = Object.freeze({ ALL: 0, CLIPBOARDREAD: 1, QUICKACTION: 2 });
  const [isLoading, setIsLoading] = useState(sections.ALL);
  const [isReadClipboardAllowed, setIsReadClipboardAllowed] = useState(false);
  const [isQuickActionsEnabled, setIsQuickActionsEnabled] = useState(false);
  const [storageIsEncrypted, setStorageIsEncrypted] = useState(true);

  useEffect(() => {
    (async () => {
      setIsReadClipboardAllowed(await AppStateChange.isReadClipboardAllowed());
      setStorageIsEncrypted(await BlueApp.storageIsEncrypted());
      setIsQuickActionsEnabled(await DeviceQuickActions.getEnabled());
      setIsLoading(false);
    })();
  }, []);

  const onValueChange = value => {
    setIsLoading(sections.CLIPBOARDREAD);
    AppStateChange.setReadClipboardAllowed(value);
    setIsReadClipboardAllowed(value);
    setIsLoading(false);
  };

  const onQuickActionsValueChange = value => {
    setIsLoading(sections.QUICKACTION);
    DeviceQuickActions.setEnabled(value);
    setIsQuickActionsEnabled(value);
    setIsLoading(false);
  };

  const stylesWithThemeHook = StyleSheet.create({
    root: {
      backgroundColor: colors.background,
    },
  });

  const openApplicationSettings = () => {
    Linking.openSettings();
  };

  return (
    <ScrollView style={[styles.root, stylesWithThemeHook.root]}>
      <BlueListItem
        hideChevron
        title={loc.settings.privacy_read_clipboard}
        Component={TouchableWithoutFeedback}
        switch={{ onValueChange, value: isReadClipboardAllowed, disabled: isLoading === sections.ALL }}
        isLoading={isLoading === sections.CLIPBOARDREAD}
      />
      <BlueCard>
        <BlueTextHooks>{loc.settings.privacy_clipboard_explanation}</BlueTextHooks>
      </BlueCard>
      <BlueSpacing20 />
      {!storageIsEncrypted && (
        <>
          <BlueListItem
            hideChevron
            title={loc.settings.privacy_quickactions}
            Component={TouchableWithoutFeedback}
            switch={{ onValueChange: onQuickActionsValueChange, value: isQuickActionsEnabled, disabled: isLoading === sections.ALL }}
            isLoading={isLoading === sections.QUICKACTION}
          />
          <BlueCard>
            <BlueTextHooks>{loc.settings.privacy_quickactions_explanation}</BlueTextHooks>
          </BlueCard>
        </>
      )}
      <BlueSpacing20 />
      <BlueListItem title={loc.settings.privacy_system_settings} chevron onPress={openApplicationSettings} />
      <BlueSpacing20 />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

SettingsPrivacy.navigationOptions = () => ({
  ...BlueNavigationStyle(),
  title: loc.settings.privacy,
});

export default SettingsPrivacy;
