import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//add firebase database component
import firebase from '../firebase';
//include my components
import AppTitle from '../components/titleText';
import AppText from '../components/appText';

class PracticeScreen extends React.Component {
  constructor(props) {
    super(props);
    //had issue getting the button to work and this fixes the listener issue I had
    this.readData = this.readData.bind(this);
    //declare the state for num as I had issues running them all into one state
    this.num = {
      random: 0
    }
    this.state = {
      list: [],
    }
    this.result = {
      newWord: '',
    }
  }
//read database
  db = firebase.database().ref('words/');

/* 

gets firebase data and creates an empty array
for loop, loops through the available data in firebase database
pushes data to the empty array
sets state to the data in the array

*/
  componentDidMount() {
    this.db.on('value', words => {
      wordsJSON = words.val();
      let array = [];
      const wordKeys = Object.keys(wordsJSON);
      for (let i = 0; i < wordKeys.length; i++) {
        const wordObject = wordsJSON[wordKeys[i]];
        array.push({ ...wordObject, word: wordKeys[i] })
      }
      this.setState({ list: array })
      // console.log(this.state.list)
    })
  }

/* 

when the button is pressed the state of random will change
generates a random number equal to the amount of words in the array that had words added from Firebase
created variable out of the state of list array's position equal to the random number state

*/
  readData() {
    const rand = Math.floor(Math.random() * this.state.list.length);
    // console.log(rand);
    this.setState({ random: this.num.random = rand });
    // console.log(this.num.random);
    const genWord = this.state.list[this.num.random];
    this.setState({ newWord: this.result.newWord = genWord });
    // console.log(this.result.newWord);
  }
//used JSON.stringify() to display the text to the user
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <AppTitle>Practice your Spanish</AppTitle>
          <AppText>Click the button to learn a new word!</AppText>
        </View>
        {
          <Text style={styles.myText}>{`${JSON.stringify(this.result.newWord)}`}</Text>
        }
        <Button
          style={styles.btnWord}
          title="New Word"
          color="orange"
          onPress={this.readData}></Button>
      </View>
    );
  }
}

export default PracticeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  btnWord: {
    marginTop: 100,
  },
  myText: {
    fontSize: 18,
    fontWeight: 'bold',

  },
});
