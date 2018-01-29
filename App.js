import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
require('./shim');
var bitcoin = require('bitcoinjs-lib')
var bip39 = require('bip39')
import { generateSecureRandom } from 'react-native-securerandom';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {mnemonic: ''};
  }
  
  componentDidMount() {
    let _this = this
    generateSecureRandom(128/8).then(randomBytes => {
      console.log(randomBytes)
      mnemonic = bip39.entropyToMnemonic(randomBytes)
      _this.setState({mnemonic: mnemonic});
      console.log(mnemonic)
    }).catch(err => {
      console.log(err)
    });
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        <Text>{this.state.mnemonic}</Text>
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
