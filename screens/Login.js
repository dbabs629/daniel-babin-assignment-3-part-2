import React from 'react';
import { Button, TextInput, StyleSheet, Text, View, ImageBackground, Animated } from 'react-native';

import AppTitle from '../components/titleText';

class LoginScreen extends React.Component {

  state = { account: '', password: '' }

  hideWelcome = new Animated.Value(100)

  welcomeClick() {
    Animated.timing(this.hideWelcome, {
      toValue: 0,
      duration: 1000
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.border}>
        <AppTitle>Account Login</AppTitle>
        <TextInput
          onChangeText={
            // update the user states value
            text => this.setState({ account: text })
          }
          style={styles.input}
          placeholder="Account Name"></TextInput>
        <TextInput
          onChangeText={
            text => this.setState({ password: text })
          }
          style={styles.input}
          placeholder="Account Password"
          secureTextEntry={true} // hide password text
        ></TextInput>
        <Button
          onPress={
            // Navigate to the Practice page in the navigation stack
            () => this.props.navigation.navigate('Profile')
          }
          style={styles.button}
          title="Login"
          color="orange"
        />
        </View>
      </View>
    )
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    width: '90%',
    paddingBottom: 50,
    paddingTop: 50,
    borderWidth: 5.0,
    borderRadius: 0.5,
    borderColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: 'whitesmoke',
    marginBottom: 20,
    padding: 10,
    width: '60%',
    marginTop: 15
  }
});