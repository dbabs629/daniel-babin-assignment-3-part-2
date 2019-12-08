import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

class UserImg extends React.Component {


    render() {
        return (
            <View>
            {/*ben-sweet-2LowviVHZ-E-unsplash  https://unsplash.com/photos/2LowviVHZ-E*/}
            <Image style={styles.image} source={require('../assets/profileImg.jpg')}></Image>
          </View>
        );
    }
}

export default UserImg;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
});