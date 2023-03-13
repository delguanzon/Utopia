import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import RecentCard from '../../components/RecentCard';
import RequestCard from '../../components/RequestCard';
import { auth } from '../../firebaseConfig';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      tabBarShowLabel: false,
    });
  }, []);

  const [signOut] = useSignOut(auth);
  return (
    <ScrollView className="bg-white">
      <View style={styles.section}>
        <Pressable
          className=" bg-white border mx-2 w-28 h-12 rounded-full justify-center items-center "
          onPress={async () => {
            await signOut();
          }}
        >
          <Text className="text-emerald-500 text-lg font-bold">Request</Text>
        </Pressable>
        <Text style={styles.headerText}>Active Tasks</Text>
        <RequestCard
          name="Utopian"
          description="Need someone to walk my dog, please"
          points={100}
          time="2 hours ago"
          latitude={45.52059825106702}
          longitude={-122.67797521534129}
          imgReq={require('../../assets/img/avatar1.png')}
        />
      </View>
      <View>
        <Text style={styles.headerText}>Completed</Text>
        <RecentCard
          title="Dog Walk"
          message="I appreciate you doing this. Astolfo is very happy too."
          points={100}
          requester="Another Utopian"
        />
        <RecentCard
          title="Dog Walk"
          message="I appreciate you doing this. Astolfo is very happy too."
          points={100}
          requester="Another Utopian"
        />
        <RecentCard
          title="Dog Walk"
          message="I appreciate you doing this. Astolfo is very happy too."
          points={100}
          requester="Another Utopian"
        />
        <RecentCard
          title="Dog Walk"
          message="I appreciate you doing this. Astolfo is very happy too."
          points={100}
          requester="Another Utopian"
        />
        <RecentCard
          title="Dog Walk"
          message="I appreciate you doing this. Astolfo is very happy too."
          points={100}
          requester="Another Utopian"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  section: {},
});
