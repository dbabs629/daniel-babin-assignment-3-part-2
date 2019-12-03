import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//add firebase database to app
import firebase from './firebase';

db = firebase.database().ref('spanish-assignment3');

export default class App extends Component {
  render() {
    console.log(db);
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
