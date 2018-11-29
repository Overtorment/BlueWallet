import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { SafeBlueArea, BlueNavigationStyle } from '../../BlueComponents';
import SortableList from 'react-native-sortable-list';
import LinearGradient from 'react-native-linear-gradient';
import { WatchOnlyWallet, LegacyWallet } from '../../class';
import { HDLegacyP2PKHWallet } from '../../class/hd-legacy-p2pkh-wallet';
import { HDLegacyBreadwalletWallet } from '../../class/hd-legacy-breadwallet-wallet';
import { HDSegwitP2SHWallet } from '../../class/hd-segwit-p2sh-wallet';
import { LightningCustodianWallet } from '../../class/lightning-custodian-wallet';
let EV = require('../../events');
let BlueApp = require('../../BlueApp');
let loc = require('../../loc/');

export default class ReorderWallets extends Component {
  static navigationOptions = ({ navigation }) => ({
    ...BlueNavigationStyle(navigation, true),
  });

  state = { data: BlueApp.getWallets().concat(false) };

  componentDidMount() {
    // this.loadWallets();
  }

  async componentWillUnmount() {
    console.warn(this.state.data);
    // if (this.state.data.length > 0) {
    //   BlueApp.wallets = this.state.data;
    //   await BlueApp.saveToDisk();
    //   EV(EV.enum.WALLETS_COUNT_CHANGED);
    // }
  }

  loadWallets() {
    const wallets = BlueApp.getWallets();
    wallets.pop();
    this.setState({ data: wallets });
  }

  _renderItem = (item, active) => {
    if (!item.data) {
      return;
    }
    item = item.data;

    let gradient1 = '#65ceef';
    let gradient2 = '#68bbe1';

    if (new WatchOnlyWallet().type === item.type) {
      gradient1 = '#7d7d7d';
      gradient2 = '#4a4a4a';
    }

    if (new LegacyWallet().type === item.type) {
      gradient1 = '#40fad1';
      gradient2 = '#15be98';
    }

    if (new HDLegacyP2PKHWallet().type === item.type) {
      gradient1 = '#e36dfa';
      gradient2 = '#bd10e0';
    }

    if (new HDLegacyBreadwalletWallet().type === item.type) {
      gradient1 = '#fe6381';
      gradient2 = '#f99c42';
    }

    if (new HDSegwitP2SHWallet().type === item.type) {
      gradient1 = '#c65afb';
      gradient2 = '#9053fe';
    }

    if (new LightningCustodianWallet().type === item.type) {
      gradient1 = '#f1be07';
      gradient2 = '#f79056';
    }

    return (
      <View
        shadowOpacity={40 / 100}
        shadowOffset={{ width: 0, height: 0 }}
        shadowRadius={5}
        style={{ backgroundColor: 'transparent', padding: 10, marginVertical: 17 }}
      >
        <LinearGradient
          shadowColor="#000000"
          colors={[gradient1, gradient2]}
          style={{
            padding: 15,
            borderRadius: 10,
            minHeight: 164,
            elevation: 5,
          }}
        >
          <Image
            source={
              (new LightningCustodianWallet().type === item.type && require('../../img/lnd-shape.png')) ||
              require('../../img/btc-shape.png')
            }
            style={{
              width: 99,
              height: 94,
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
          />

          <Text style={{ backgroundColor: 'transparent' }} />
          <Text
            numberOfLines={1}
            style={{
              backgroundColor: 'transparent',
              fontSize: 19,
              color: '#fff',
            }}
          >
            {item.getLabel()}
          </Text>
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={{
              backgroundColor: 'transparent',
              fontWeight: 'bold',
              fontSize: 36,
              color: '#fff',
            }}
          >
            {loc.formatBalance(item.getBalance())}
          </Text>
          <Text style={{ backgroundColor: 'transparent' }} />
          <Text
            numberOfLines={1}
            style={{
              backgroundColor: 'transparent',
              fontSize: 13,
              color: '#fff',
            }}
          >
            {loc.wallets.list.latest_transaction}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              backgroundColor: 'transparent',
              fontWeight: 'bold',
              fontSize: 16,
              color: '#fff',
            }}
          >
            {loc.transactionTimeToReadable(item.getLatestTransactionTime())}
          </Text>
        </LinearGradient>
      </View>
    );
  };

  render() {
    return (
      <SafeBlueArea>
        <SortableList style={{ flex: 1 }} data={this.state.data} renderRow={this._renderItem} />
      </SafeBlueArea>
    );
  }
}
