import { View, Text, TextInput, Button, Alert, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db, auth } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { getApp } from 'firebase/app';
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
} from 'firebase/auth';
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseRecaptchaBanner,
} from 'expo-firebase-recaptcha';

const app = getApp();

const SplashScreen = ({ navigation }) => {
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

  //SignIn Variables

  const recaptchaVerifier = React.useRef(null);
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const [messageSent, setMessageSent] = React.useState(false);

  const firebaseConfig = app ? app.options : undefined;
  const [message, showMessage] = React.useState();
  const attemptInvisibleVerification = true;

  //SignIn Functions

  const sendVerification = async () => {
    // The FirebaseRecaptchaVerifierModal ref implements the
    // FirebaseAuthApplicationVerifier interface and can be
    // passed directly to `verifyPhoneNumber`.
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      console.log(phoneNumber);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      showMessage({
        text: 'Verification code has been sent to your phone.',
      });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: 'red' });
    }
  };

  return (
    <SafeAreaView className="bg-emerald-500 flex-1 justify-center  items-center">
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification
      />
      <View>
        <Text className="text-white font-bold text-6xl "> ᜌᜓᜆᜓᜉ᜔ᜌ </Text>
        {/* <Text className="text-white font-bold text-6xl "> u-to-pia </Text> */}
      </View>
      <View className="border-2 border-white rounded-lg w-80 h-12 text-white justify-center items-center  flex-row my-7">
        {/* <Text className="text-white text-lg">{areaCode}</Text> */}
        <TextInput
          className="text-white text-lg text-center"
          keyboardType={'number-pad'}
          placeholder={
            !verificationId
              ? `Enter 10 Digit Phone Number`
              : `Enter 6 Digit Code`
          }
          maxLength={10}
          placeholderTextColor="white"
          onChangeText={(displayNumber) => setDisplayNumber(displayNumber)}
          value={displayNumber}
        />
      </View>

      <Button
        title="Send Verification Code"
        disabled={!phoneNumber}
        onPress={() => sendVerification()}
      />

      <Pressable
        className={
          !invited
            ? 'invisible'
            : 'bg-white w-28 h-12 rounded-full justify-center items-center '
        }
        onPress={() => navigation.navigate('Main')}
      >
        <Text className="text-emerald-500 text-lg font-bold">
          {verificationId ? `Sign In` : `Confirm`}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SplashScreen;
