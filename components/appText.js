import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppText extends React.Component {
    render() {
        return (
          <View>
            <Text style={styles.appText}>{this.props.children}</Text>
          </View>
        );
      }
    }

export default AppText;

const styles = StyleSheet.create({
  appText: {
    fontSize: 14,
    color: "gray",
    fontFamily: "normal"
  },
});