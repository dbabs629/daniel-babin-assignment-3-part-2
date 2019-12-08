//import React librarys and components to be used in my app
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';

//import screen components
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import ProfileScreen from './screens/Profile';
import PracticeScreen from './screens/Practice';
import WordsScreen from './screens/Words';

/*

I found:

https://stackoverflow.com/questions/55329542/how-to-show-icons-on-tab-bar-in-react-native
and
https://github.com/react-navigation/react-navigation/issues/494

These two links showed how to change my tab bar icons by adding the navigationOptions property & made a function after each route
I then accessed the tabBarIcon property and made another function which called the Icon class from the vector icons/Ionicons library
I then changed then added some properties I could help style the icon individually. 
The variable created in the tabBarIcon parentheses allows the Icon to get the current tint color of the tab and displays that color.

*/

// Tab Navigator
//setting my routes to the screens they are pointing to
const myNav = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen, navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name='ios-home' size={30} color={tintColor} />
        )
      })
    },

    Login: {
      screen: LoginScreen, navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name='ios-lock' size={30} color={tintColor} />
        )
      })
    },
    Profile: {
      screen: ProfileScreen, navigationOptions: () => ({
        tabBarIcon: ({tintColor} ) => (
          <Icon name='ios-contact' size={30} color={tintColor} />
        )
      })
    },
    Practice: {
      screen: PracticeScreen, navigationOptions: () => ({
        tabBarIcon: ({tintColor} ) => (
          <Icon name='ios-play' size={30} color={tintColor} />
        )
      })
    },
    Words: {
      screen: WordsScreen, navigationOptions: () => ({
        tabBarIcon: ({tintColor} ) => (
          <Icon name='ios-list' size={30} color={tintColor} />
        )
      })
    },
  },

  /*
  
  I used an example on https://reactnavigation.org/docs/en/1.x/tab-based-navigation.html 
  which showed the tabBarOptions can be changed if placed after you set your routes
  I added and changed some properties to my bottom tab bar to fit the UI design

  */

  {
    initialRouteName: 'Home',
    tabBarOptions: {
      showLabel: true, // show the labels for tabs
      showIcon: true, //show icons
      activeTintColor: 'orange', // active tab item color
      inactiveTintColor: 'gray',  // inactive tab item color
      // changed tabs background color slightly to distinguish between white screen and tab bar for UX
      style: {
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'whitesmoke'
      }
    },
  }
)

//created a container for my apps root navigation and create stack navigator for my apps routes
export default createAppContainer(
  createStackNavigator(
    {
      App: myNav,
    },
    {
      // remove header display for full screen look of app
      headerMode: 'none',
      //user can use gestures such as swipe left or right
      navigationOptions: {
        gesturesEnabled: true,
      },
    }
  )
);