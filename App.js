import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
require('./shim');
var bitcoin = require('bitcoinjs-lib')
var bip39 = require('bip39')


export default class App extends React.Component {
  
  render() {
    var mnemonic = bip39.generateMnemonic()
    
    return (
      <View style={styles.container}>
        <Text>mnemonic</Text>
        <Text>2Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
