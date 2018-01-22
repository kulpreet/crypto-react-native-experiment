import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateChluTransaction from 'chlu-wallet-support-js';


export default class App extends React.Component {
  
  render() {
    let amount = 1e4
    let txBuilder = new CreateChluTransaction()  
    let mnemonic = "alter ankle cart harvest ecology sign athlete congress desert scare planet love"
    txBuilder.getImportedKey(mnemonic)
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
