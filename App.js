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
//         <Button
//         title="Offer"
//         onPress={this._handleButtonPress}
//         />
//         <Button
//         title="Request"
//         onPress={this._handleButtonPress}
//         />
//         <Button
//         title="Info"
//         onPress={this._handleButtonPress}
//         />
//         <Button
//         title="Report"
//         onPress={this._handleButtonPress}
//         />
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
    return (
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Button
              onPress={() => navigate('Chat')}
              title="Chat with Lucy"
            />
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
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
