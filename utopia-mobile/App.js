import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, db } from './firebaseConfig';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainContainer from './screens/MainContainer';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user] = useAuthState(auth);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
          />
        ) : (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
          />
        )}
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          name="Main"
          component={MainContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
