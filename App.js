import { createStackNavigator } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';

const Navigator = createStackNavigator(
	{
		Search: {
			screen: SearchScreen
		}
	},
	{
		initialRouteName: 'Search'
	}
);

export default Navigator;
