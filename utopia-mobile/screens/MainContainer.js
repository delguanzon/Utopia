import * as React from 'react';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';

// Screens
import HomeTabScreen from './tabs/HomeTabScreen';
import ListTabScreen from './tabs/ListTabScreen';
import MessageTabScreen from './tabs/MessageTabScreen';
import ProfileTabScreen from './tabs/ProfileTabScreen';
import { BackHandler } from 'react-native';
// import DetailsScreen from './screens/DetailsScreen';
// import SettingsScreen from './screens/SettingsScreen';

//Screen names
const homeName = 'Home';
const listName = 'List';
const messagesName = 'Messages';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

const MainContainer = ({ navigation }) => {
  // useFocusEffect(
  //   React.useCallback(() => {
  //     const onBackPress = () => {
  //       return true;
  //     };
  //     BackHandler.addEventListener('hardwareBackPress', onBackPress);

  //     return () =>
  //       BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  //   }, [])
  // );
  // React.useEffect(() => {
  //   navigation.setOptions({
  //     headerShown: false,
  //     backBehavior: 'none',
  //   });
  // }, []);
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === listName) {
            iconName = focused ? 'list' : 'list-outline';
          } else if (rn === messagesName) {
            iconName = focused ? 'mail' : 'mail-outline';
          } else if (rn === profileName) {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
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
        tabBarActiveTintColor: '#76BA99',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { padding: 10, height: 70 },
      })}
    >
      <Tab.Screen
        name={homeName}
        component={HomeTabScreen}
      />
      <Tab.Screen
        name={listName}
        component={ListTabScreen}
      />
      <Tab.Screen
        name={messagesName}
        component={MessageTabScreen}
      />
      <Tab.Screen
        name={profileName}
        component={ProfileTabScreen}
      />
    </Tab.Navigator>
  );
};

export default MainContainer;
