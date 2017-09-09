import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator} from 'react-navigation';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAYvr_RQWQaTRxR9ImblpKBjGWHMUuUUgg",
  authDomain: "unisupport-a0808.firebaseapp.com",
  databaseURL: "https://unisupport-a0808.firebaseio.com",
  storageBucket: "unisupport-a0808.appspot.com"
};

firebase.initializeApp(firebaseConfig);

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


// Functions

function storeRequest(type) {
  firebase.database().ref('users/' + userId).set({
    request: type
  });
}

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
              title="Offer"
            />
            <Button
              onPress={() => navigate('Request')}
              title="Request"
            />
            <Button
              onPress={() => navigate('Info')}
              title="Info"
            />

          </View>
        );
  }
}

class OfferScreen extends React.Component {
  static navigationOptions = {
    title: 'Offer',
  };

  storeRequest = type => {
    firebase.database().ref('hello1').set({
      request: type
    });
  };

  render() {
    return (
      <View>
        <Button
          title="Shelter"
          onPress={() => this.storeRequest('shelter')}
        />
          <Button
          title="Assistance"
          onPress={() => this.storeRequest('assistance')}
        />
          <Button
          title="Supplies"
          onPress={() => this.storeRequest('supplies')}
        />
          <Button
          title="Ride"
          onPress={this.storeRequest}
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
          title="Shelter"
          onPress={this.storeRequest}
        />
          <Button
          title="Assistance"
          onPress={this.storeRequest}
        />
          <Button
          title="Supplies"
          onPress={this.storeRequest}
        />
          <Button
          title="Ride"
          onPress={this.storeRequest}
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
          title="Shelter"
          onPress={this.storeRequest}
        />
          <Button
          title="Assistance"
          onPress={this.storeRequest}
        />
          <Button
          title="Supplies"
          onPress={this.storeRequest}
        />
          <Button
          title="Ride"
          onPress={this.storeRequest}
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
