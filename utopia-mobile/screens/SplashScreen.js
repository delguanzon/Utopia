import { View, Text, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
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
        <Text className="text-white font-bold text-6xl "> u-to-pia </Text>
      </View>
      <View className="border-2 border-white  w-80 h-12 text-white text-center">
        <Text>+1</Text>
        <TextInput
          keyboardType={'number-pad'}
          placeholder="(604) 333-3333"
          placeholderTextColor="white"
          onChangeText={(phoneNumber) => phoneFormat(phoneNumber)}
          value={phoneNumber}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
