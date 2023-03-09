import { View, Text, TextInput, Button, Alert, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [displayNumber, setDisplayNumber] = useState('');
  const [invited, setInvited] = useState(null);
  //const [phoneNumber, setPhoneNumber] = useState();

  const phoneNumber = `+1${displayNumber}`;

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    if (phoneNumber.length === 12) {
      // const docRef = doc(db, 'cities', 'SF');
      getDoc(doc(db, 'invites', phoneNumber)).then((docSnap) => {
        if (docSnap.exists()) {
          //console.log('Document data:', docSnap.data());
          setInvited(true);
        }
      });
    } else {
      setInvited(false);
    }
  }, [phoneNumber]);

  const phoneFormat = (displayNumber) => {
    var match = displayNumber.match(/(\d{3})(\d{3})(\d{4})$/);
    setDisplayNumber(displayNumber);
    if (match) {
      let number = ['(', match[1], ') ', match[2], '-', match[3]].join('');
      setDisplayNumber(number);
      return;
    }
    setDisplayNumber(displayNumber);
    //console.log(phoneNumber);
  };

  return (
    <SafeAreaView className="bg-emerald-500 flex-1 justify-center  items-center">
      <View>
        <Text className="text-white font-bold text-6xl "> ᜌᜓᜆᜓᜉ᜔ᜌ </Text>
        {/* <Text className="text-white font-bold text-6xl "> u-to-pia </Text> */}
      </View>
      <View className="border-2 border-white rounded-lg w-80 h-12 text-white justify-center items-center  flex-row my-7">
        {/* <Text className="text-white text-lg">{areaCode}</Text> */}
        <TextInput
          className="text-white text-lg text-center"
          keyboardType={'number-pad'}
          placeholder="Enter 10 Digit Phone Number"
          maxLength={10}
          placeholderTextColor="white"
          onChangeText={(displayNumber) => setDisplayNumber(displayNumber)}
          value={displayNumber}
        />
      </View>

      <Pressable
        className={
          !invited
            ? 'invisible'
            : 'bg-white w-28 h-12 rounded-full justify-center items-center '
        }
        onPress={() => Alert.alert('Left button pressed')}
      >
        <Text className="text-emerald-500 text-lg font-bold">Sign In</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SplashScreen;
