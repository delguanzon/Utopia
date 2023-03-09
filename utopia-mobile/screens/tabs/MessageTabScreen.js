import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

const MessageTabScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      tabBarShowLabel: false,
    });
  }, []);
  return (
    <View>
      <Text>MessageTabScreen</Text>
    </View>
  );
};

export default MessageTabScreen;
