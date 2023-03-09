import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      tabBarShowLabel: false,
    });
  }, []);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
