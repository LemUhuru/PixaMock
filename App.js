import React from 'react';
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './src/components/HomeScreen'
import DetailScreen from './src/components/DetailScreen'

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
}, {
  initialRouteName: 'Home',
})

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
