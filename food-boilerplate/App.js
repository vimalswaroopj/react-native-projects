import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultsShow from './src/screens/resultsShow';
import SearchScreen from './src/screens/searchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Results: ResultsShow
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

export default createAppContainer(navigator)