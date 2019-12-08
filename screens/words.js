import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//add firebase database
import firebase from '../firebase';
//include my components
import AppTitle from '../components/titleText';
import AppText from '../components/appText';

class WordsScreen extends React.Component {
    constructor(props) {
        super(props);
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
            console.log(this.state.list)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.welcome}>
                    <AppTitle>Spanish</AppTitle>
                    <AppText>List of Words</AppText>
                </View>
                {
                    this.state.list.map((allWords, index) =>
                            <Text key={index}>{`${JSON.stringify(allWords)}`}</Text>
                    )
                }
            </View>
        );
    }
}

export default WordsScreen;

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
    myText: {
        fontSize: 18,
        fontWeight: 'bold',

    },
});