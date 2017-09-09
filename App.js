import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator} from 'react-navigation';
// import * as firebase from 'firebase';


// export default class App extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Button
//           onPress={() => navigate('Chat')}
//           title="Chat with Lucy"
//         />
//
//       </View>
//     );
//   }
// }


// export default class App extends React.Component {

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
          <View>
            <Button
              onPress={() => navigate('Offer')}
              title="Navigate to Offer"
            />
            <Button
              onPress={() => navigate('Request')}
              title="Navigate to Request"
            />
            <Button
              onPress={() => navigate('Info')}
              title="Navigate to Info"
            />

          </View>
        );
  }
}

class OfferScreen extends React.Component {
  static navigationOptions = {
    title: 'Offer',
  };
  render() {
    return (
      <View>
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

class RequestScreen extends React.Component {
  static navigationOptions = {
    title: 'Request',
  };
  render() {
    return (
      <View>
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


class InfoScreen extends React.Component {
  static navigationOptions = {
    title: 'Info',
  };
  render() {
    return (
      <View>
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

export default StackNavigator({
  Home: { screen: HomeScreen },
  Offer: { screen: OfferScreen },
  Request: { screen: RequestScreen },
  Info: { screen: InfoScreen },

});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
