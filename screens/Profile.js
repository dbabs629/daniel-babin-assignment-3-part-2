import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

import UserImg from '../components/userImage';
import AppTitle from '../components/titleText';
import AppText from '../components/appText';


class ProfileScreen extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <UserImg></UserImg>
        </View>
        <View style={styles.titleView}>
          <AppTitle>Daniel Babin</AppTitle>
          <AppText>Student who is learning a new language {'\n'} in between studying and working.</AppText>
          </View>
          <View style={styles.textView}>
          <AppText>Languages Known: English</AppText>
          <AppText>Currently Learning: Spanish</AppText>
        </View>
        <View style={styles.btnView}>
          <Button
            onPress={
              // Navigate to the Practice page in the navigation stack
              () => this.props.navigation.navigate('Practice')
            }
            style={styles.button}
            title="Continue Learning"
            color="orange"
          />
        </View>
      </View>
    );
  }
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  imageView: {
    width: '100%',
    height: '25%',
    marginTop: 24,
  },
  button: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  titleView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '15%',
  },
  textView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  }
});