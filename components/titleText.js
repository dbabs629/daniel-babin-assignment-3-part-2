import React from 'react';
import { Text, StyleSheet } from 'react-native';

class AppTitle extends React.Component {
    render() {
        return (
            <Text style={styles.titleText}>{this.props.children}</Text>
        );
      }
    }

export default AppTitle;

const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        color: "gray",
        fontWeight: "bold",
        fontFamily: 'Roboto'
      },
});
