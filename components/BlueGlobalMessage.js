import React, { useContext, useEffect, useRef } from 'react';
import { BlueGlobalMessageContext } from './BlueGlobalMessageContext';
import { Text, Animated, Easing, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';


/*

How to use: 

Class Component Example:
    WalletsList.contextType = BlueGlobalMessageContext;
    this.context.show({ message: "Importing Wallet..."});

Functional Component Example:
  const {show} = useContext(BlueGlobalMessageContext);
  show({ message: "Importing Wallet..."});


Credit: https://selleo.com/blog/simple-toast-in-react-native-using-context-api-and-hooks
*/
export const BlueGlobalMessage = () => {
  const { container, hide } = useContext(BlueGlobalMessageContext);
  const translateYRef = useRef(new Animated.Value(-100));
  const { colors } = useTheme();
  const stylesHook = StyleSheet.create({
    container: {
      backgroundColor: colors.warning,
      transform: [{ translateY: translateYRef.current }],
    },
    message: {
      color: colors.warningText,
    },
  });

  useEffect(() => {
    if (container.visible) {
      Animated.timing(translateYRef.current, {
        duration: 300,
        easing: Easing.ease,
        toValue: 40,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateYRef.current, {
        duration: 450,
        easing: Easing.ease,
        toValue: -100,
        useNativeDriver: true,
      }).start();
    }
  }, [container]);

  return (
    <Animated.View style={[styles.container, stylesHook.container]}>
      <TouchableOpacity onPress={hide} style={styles.content}>
        <Text style={[styles.message, stylesHook.message]}> {container.message}</Text>
        <ActivityIndicator />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default BlueGlobalMessage;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    marginHorizontal: 16,
    padding: 4,
    position: 'absolute',
    top: 0,
    zIndex: 2,
    right: 0,
    left: 0,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 32,
    width: '100%',
  },
  message: {
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 0.26,
    marginHorizontal: 10,
  },
});
