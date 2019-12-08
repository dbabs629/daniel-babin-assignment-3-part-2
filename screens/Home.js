import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

import AppTitle from '../components/titleText';
import AppText from '../components/appText';

class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%', justifyContent: 'center', alignContent: 'center'}}>
              <AppTitle>GoLang Learner</AppTitle>
              <AppText>Learn a new language today!</AppText>
          <Button
          onPress={
            // Navigate to the Practice page in the navigation stack
            () => this.props.navigation.navigate('Login')
          }
          style={styles.button}
          title="Start"
          color="orange"
        />
        </ImageBackground>
      </View>
    )
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 30,
    color: "white",
  },
});