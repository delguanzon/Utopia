import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
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
  const [verified, setVerified] = React.useState(false);
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

  const confirmCode = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);
      showMessage({ text: 'Phone authentication successful 👍' });
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
        {!verificationId ? (
          <Text className="text-white font-bold text-6xl "> ᜌᜓᜆᜓᜉ᜔ᜌ </Text>
        ) : (
          <Text className="text-white font-bold text-6xl "> u-to-pia </Text>
        )}

        {/* */}
      </View>

      {!verificationId ? (
        <View className="justify-center  items-center">
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
            onPress={() => sendVerification()}
            // onPress={() => navigation.navigate('Main')}
          >
            <Text className="text-emerald-500 text-lg font-bold">
              Send Code
            </Text>
          </Pressable>
        </View>
      ) : (
        <View className="justify-center  items-center">
          <View className="border-2 border-white rounded-lg w-80 h-12 text-white justify-center items-center  flex-row my-7">
            {/* <Text className="text-white text-lg">{areaCode}</Text> */}
            <TextInput
              className={
                !verified ? 'text-white text-lg text-center' : 'invisible'
              }
              keyboardType={'number-pad'}
              placeholder="Enter 6 Digit Code"
              maxLength={6}
              placeholderTextColor="white"
              onChangeText={(code) => setVerificationCode(code)}
              value={verificationCode}
            />
          </View>
          <Pressable
            className={
              verified
                ? 'invisible'
                : 'bg-white w-28 h-12 rounded-full justify-center items-center '
            }
            onPress={async () => {
              try {
                const credential = PhoneAuthProvider.credential(
                  verificationId,
                  verificationCode
                );
                await signInWithCredential(auth, credential);
                showMessage({ text: 'Phone authentication successful 👍' });
              } catch (err) {
                showMessage({ text: `Error: ${err.message}`, color: 'red' });
              }
            }}
          >
            <Text className="text-emerald-500 text-lg font-bold">Sign In</Text>
          </Pressable>
          {/* <Pressable
            className={
              !verified
                ? 'invisible'
                : 'bg-white w-28 h-12 rounded-full justify-center items-center '
            }
            onPress={() => navigation.navigate('Main')}
          >
            <Text className="text-emerald-500 text-lg font-bold">Sign In</Text>
          </Pressable> */}
        </View>
      )}

      {message ? (
        <TouchableOpacity
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 0xffffffee, justifyContent: 'center' },
          ]}
          onPress={() => showMessage(undefined)}
        >
          <Text
            style={{
              color: message.color || 'blue',
              fontSize: 17,
              textAlign: 'center',
              margin: 20,
            }}
          >
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined}
    </SafeAreaView>
  );
};

export default SplashScreen;
