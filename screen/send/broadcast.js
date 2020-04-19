import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Linking, StyleSheet, View, KeyboardAvoidingView, Platform, Text } from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { HDSegwitBech32Wallet } from '../../class/hd-segwit-bech32-wallet';
import {
  SafeBlueArea,
  BlueCard,
  BlueButton,
  BlueFormInput,
  BlueSpacing10,
  BlueSpacing20,
  BlueFormLabel,
  BlueTextCentered,
  BlueBigCheckmark,
} from '../../BlueComponents';
import BlueElectrum from '../../BlueElectrum';

const BROADCAST_RESULT = {
  none: 'Input transaction hash',
  pending: 'pending',
  success: 'success',
  error: 'error',
};

export default function Broadcast() {
  const [tx, setTx] = useState('');
  const [txHex, setTxHex] = useState('');
  const [broadcastResult, setBroadcastResult] = useState(BROADCAST_RESULT.none);
  const inputRef = useRef();
  const handleUpdateTxHex = nextValue => setTxHex(nextValue.trim());
  const handleBroadcast = async () => {
    setBroadcastResult(BROADCAST_RESULT.pending);
    try {
      await BlueElectrum.ping();
      await BlueElectrum.waitTillConnected();
      const walletObj = new HDSegwitBech32Wallet();
      const result = await walletObj.broadcastTx(txHex);
      // i.e. {"broadcast": "dfb835b9f60d5ae5dad13830a0fed1cd5cc4ab354ae023d375c44da57482aff3"}
      if (result && result.broadcast) {
        setTx(result.broadcast);
        setBroadcastResult(BROADCAST_RESULT.success);
      } else {
        setBroadcastResult(BROADCAST_RESULT.error);
      }
    } catch (error) {
      ReactNativeHapticFeedback.trigger('notificationError', { ignoreAndroidSystemSettings: false });
      setBroadcastResult(BROADCAST_RESULT.error);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <SafeBlueArea style={styles.blueArea}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : null} keyboardShouldPersistTaps="handled">
        <View style={styles.wrapper}>
          {BROADCAST_RESULT.success !== broadcastResult && (
            <BlueCard>
              <View style={styles.topFormRow}>
                <BlueFormLabel>{broadcastResult}</BlueFormLabel>
                {BROADCAST_RESULT.pending === broadcastResult && <ActivityIndicator size="small" />}
              </View>
              <BlueFormInput textInputRef={inputRef} multiline numberOfLines={8} value={txHex} onChangeText={handleUpdateTxHex} />
              <BlueSpacing10 />
              <BlueButton title="BROADCAST" onPress={handleBroadcast} disabled={broadcastResult === BROADCAST_RESULT.pending} />
            </BlueCard>
          )}
          {BROADCAST_RESULT.success === broadcastResult && <SuccessScreen tx={tx} />}
        </View>
      </KeyboardAvoidingView>
    </SafeBlueArea>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blueArea: {
    flex: 1,
    paddingTop: 19,
  },
  broadcastResultWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  link: {
    color: 'blue',
  },
  topFormRow: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 0,
    paddingRight: 100,
    height: 40,
  },
});

function SuccessScreen({ tx }) {
  if (!tx) {
    return null;
  }
  return (
    <View style={styles.wrapper}>
      <BlueCard>
        <View style={styles.broadcastResultWrapper}>
          <BlueBigCheckmark />
          <BlueSpacing20 />
          <BlueTextCentered>Success! You transaction has been broadcasted!</BlueTextCentered>
          <BlueSpacing10 />
          <Text style={styles.link} onPress={() => Linking.openURL(`https://live.blockcypher.com/btc/tx/${tx}`)}>
            Open link in explorer
          </Text>
        </View>
      </BlueCard>
    </View>
  );
}

SuccessScreen.propTypes = {
  tx: PropTypes.string.isRequired,
};
