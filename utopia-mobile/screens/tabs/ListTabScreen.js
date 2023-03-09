import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const ListTabScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Requests',
      tabBarShowLabel: false,
    });
  }, []);
  return (
    <View>
      <Text>ListTabScreen</Text>
    </View>
  );
};

export default ListTabScreen;

const styles = StyleSheet.create({});
