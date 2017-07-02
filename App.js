import React from 'react';
import { AsyncStorage, Button, StyleSheet, Platform, Text, View } from 'react-native';
import { Util } from 'expo';

let separator;

if (Platform.OS === 'android') {
  separator = <View style={{marginVertical: 10}} />;
}

export default class App extends React.Component {

  _getStorage = async () => {
    const result = await AsyncStorage.getItem('name');
    alert(result ? result : `No value saved to key 'name'`);
  }

  _clearStorage = async () => {
    AsyncStorage.clear();
  }

  _putStorage = async () => {
    AsyncStorage.setItem('name', 'Brent');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Get contents of key 'name'" onPress={this._getStorage} />
        {separator}
        <Button title="Put contents 'Brent' in storage under key 'name'" onPress={this._putStorage} />
        {separator}
        <Button title="Clear storage" onPress={this._clearStorage} />
        {separator}
        <Button title="Reload this app" onPress={() => Util.reload()} />
        {separator}
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
