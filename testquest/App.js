import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Profile from './screens/Profile';
import Reward from './screens/Reward';
import Home from './screens/Home';
import Battle from './screens/Battle';
import CustomBottomNavigation from './components/CustomBottomNavigation';
import { useFonts } from 'expo-font';

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
}; 

const App = () => {
  const [loaded] = useFonts({
    OswaldBold: require('./assets/fonts/Oswald-Bold.ttf'),
    OswaldSemiBold: require('./assets/fonts/Oswald-SemiBold.ttf'),
    OswaldMedium: require('./assets/fonts/Oswald-Medium.ttf'),
    OswaldRegular: require('./assets/fonts/Oswald-Regular.ttf'),
    OswaldLight: require('./assets/fonts/Oswald-Light.ttf'),
  });

  if (!loaded) return null;
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        initialRouteName="Profile"
        tabBar={(props) => <CustomBottomNavigation {...props} />}>
        <Tab.Screen
          name="Home"
          component={() => <Home />}
          options={{ headerShown: false, tabBarLabel: 'Quête' }}
        />
        <Tab.Screen
          name="Battle"
          component={() => <Battle />}
          options={{ headerShown: false, tabBarLabel: 'Combat' }}
        />
        <Tab.Screen
          name="Reward"
          component={() => <Reward />}
          options={{ headerShown: false, tabBarLabel: 'Récompense' }}
        />
        <Tab.Screen
          name="Profile"
          component={() => <Profile />}
          options={{ headerShown: false, tabBarLabel: 'Profile' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
