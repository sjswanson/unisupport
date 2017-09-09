import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
        title="Offer"
        onPress={this._handleButtonPress}
        />
        <Button
        title="Request"
        onPress={this._handleButtonPress}
        />
        <Button
        title="Info"
        onPress={this._handleButtonPress}
        />
        <Button
        title="Report"
        onPress={this._handleButtonPress}
        />
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
