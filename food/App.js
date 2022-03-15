import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/searchScreen';

import React from 'react'
import {View, Text} from 'react-native'

const navigator = createStackNavigator({
  Screen: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Seach'
  }
});
const App = () => {
return (
  <View>
    <Text>App</Text>
  </View>
)
}

// export default App
// const navigator = createStackNavigator({
//   Screen: SearchScreen
// }, {
//   initialRouteName: 'Search',
//   defaultNavigationOptions: {
//     title: 'Business Seach'
//   }
// })

export default createAppContainer(navigator)