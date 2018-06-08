import { StackNavigator } from 'react-navigation'
import HomeScreen from './App'
import DetailScreen from './src/components/detail'

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
})
