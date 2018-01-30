import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
require('./shim');
var bitcoin = require('bitcoinjs-lib')
var bip39 = require('bip39')
import { generateSecureRandom } from 'react-native-securerandom'
import ImportPrivateKey from './import_private_key'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mnemonic: undefined,
      address: undefined
    };
  }
  
  componentDidMount() {
    let _this = this
    generateSecureRandom(128/8).then(randomBytes => {
      console.log(randomBytes)
      let mnemonic = bip39.entropyToMnemonic(randomBytes)
      let chlu = new ImportPrivateKey()
      const keyPath = "m/44'/1'/0'/0/0"
      let kp = chlu.importFromMnemonic(mnemonic, keyPath)

      //_this.setState({mnemonic: mnemonic});
      _this.setState({mnemonic: mnemonic, address: kp.getAddress()});
      console.log(mnemonic)
    }).catch(err => {
      console.log(err)
    });
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        <Text>{this.state.mnemonic}</Text>
        <Text>{this.state.address}</Text>
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
