import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, db } from './firebaseConfig';
import SplashStackScreen from './screens/SplashStackScreen';
import RegisterScreen from './screens/RegisterStackScreen';
import MainContainer from './screens/MainContainer';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <NavigationContainer>
      {user === null ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={SplashStackScreen}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
          />
        </Stack.Navigator>
      ) : (
        <MainContainer />
      )}
    </NavigationContainer>
  );
}
