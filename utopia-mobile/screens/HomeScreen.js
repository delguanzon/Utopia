import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-emerald-500 flex-1 justify-center  items-center">
      <View>
        <Text className="text-white font-bold text-6xl "> ᜌᜓᜆᜓᜉ᜔ᜌ </Text>
        <Text className="text-white font-bold text-6xl "> u-to-pia </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
