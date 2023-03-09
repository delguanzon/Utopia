import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

const ProfileTabScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      tabBarShowLabel: false,
    });
  }, []);
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileTabScreen;
