import { View, Text, TextInput, Button, Alert, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const phoneFormat = (phoneNumber) => {
    var match = phoneNumber.match(/(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      let number = ['(', match[1], ') ', match[2], '-', match[3]].join('');

      setPhoneNumber(number);

      return;
    }

    setPhoneNumber(phoneNumber);
  };

  return (
    <SafeAreaView className="bg-emerald-500 flex-1 justify-center  items-center">
      <View>
        <Text className="text-white font-bold text-6xl "> ᜌᜓᜆᜓᜉ᜔ᜌ </Text>
        {/* <Text className="text-white font-bold text-6xl "> u-to-pia </Text> */}
      </View>
      <View className="border-2 border-white rounded-lg w-80 h-12 text-white justify-center items-center  flex-row my-7">
        <Text className="text-white text-lg">+1</Text>
        <TextInput
          className="text-white text-lg"
          keyboardType={'number-pad'}
          placeholder="(604) 333-3333"
          maxLength={14}
          placeholderTextColor="white"
          onChangeText={(phoneNumber) => phoneFormat(phoneNumber)}
          value={phoneNumber}
        />
      </View>
      <Pressable
        className="bg-white w-28 h-12 rounded-full justify-center items-center"
        onPress={() => Alert.alert('Left button pressed')}
      >
        <Text className="text-emerald-500 text-lg font-bold">Sign In</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SplashScreen;
