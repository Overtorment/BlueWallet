import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { icons } from 'app/assets';
import { GradientView, Image } from 'app/components';
import { HEADER_HEIGHT } from 'app/components/Header';
import i18n from 'app/locale';
import { getStatusBarHeight, palette, typography } from 'app/styles';

interface Props {
  onAddButtonPress: () => void;
  children: React.ReactNode;
}

export class ContactListHeader extends React.PureComponent<Props> {
  render() {
    return (
      <GradientView variant={GradientView.Variant.Primary} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{i18n.contactList.screenTitle}</Text>
          <TouchableOpacity style={styles.rightElement} onPress={this.props.onAddButtonPress}>
            <Image source={icons.addIcon} style={styles.addIcon} />
          </TouchableOpacity>
        </View>
        {this.props.children}
      </GradientView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
    height: HEADER_HEIGHT + 60 + getStatusBarHeight(),
    width: '100%',
  },
  header: {
    height: HEADER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...typography.headline4,
    color: palette.white,
  },
  addIcon: {
    height: 12,
    width: 12,
  },
  rightElement: {
    position: 'absolute',
    height: HEADER_HEIGHT,
    width: HEADER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    top: 0,
  },
});
