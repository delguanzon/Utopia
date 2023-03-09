import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import RequestCard from '../../components/RequestCard';

const ListTabScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Requests',
      tabBarShowLabel: false,
    });
  }, []);
  return (
    <ScrollView className="bg-white">
      <RequestCard
        name="Utopian"
        description="Need someone to walk my dog, please"
        points={100}
        time="2 hours ago"
        latitude={37.78825}
        longitude={-122.4194}
        imgReq={require('../../assets/img/avatar2.png')}
      />
      <RequestCard
        name="Utopian"
        description="Need someone to walk my dog, please"
        points={100}
        time="2 hours ago"
        latitude={37.78825}
        longitude={-122.4194}
        imgReq={require('../../assets/img/avatar1.png')}
      />
      <RequestCard
        name="Utopian"
        description="Need someone to walk my dog, please"
        points={100}
        time="2 hours ago"
        latitude={37.78825}
        longitude={-122.4194}
        imgReq={require('../../assets/img/avatar2.png')}
      />
      <RequestCard
        name="Utopian"
        description="Need someone to walk my dog, please"
        points={100}
        time="2 hours ago"
        latitude={57.78825}
        longitude={-222.4194}
        imgReq={require('../../assets/img/avatar3.png')}
      />
    </ScrollView>
  );
};

export default ListTabScreen;

const styles = StyleSheet.create({});
