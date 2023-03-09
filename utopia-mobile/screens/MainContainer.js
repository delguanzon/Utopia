import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';

// Screens
import HomeScreen from './HomeStackScreen';
import RegisterScreen from './RegisterStackScreen';
// import DetailsScreen from './screens/DetailsScreen';
// import SettingsScreen from './screens/SettingsScreen';

//Screen names
const homeName = 'Home';
const registerName = 'Register';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === registerName) {
            iconName = focused ? 'list' : 'list-outline';
          } else if (rn === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return (
            <Icon
              name={iconName}
              size={size}
              color={color}
              type="ionicon"
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'grey',
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        style: { padding: 10, height: 70 },
      }}
    >
      <Tab.Screen
        name={homeName}
        component={HomeScreen}
      />
      <Tab.Screen
        name={registerName}
        component={RegisterScreen}
      />
    </Tab.Navigator>
  );
}

export default MainContainer;
