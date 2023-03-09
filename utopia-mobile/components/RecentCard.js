import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Image } from '@rneui/themed';
import { Icon } from '@rneui/base';

const RecentCard = ({ points, message, title, requester }) => {
  return (
    <TouchableOpacity>
      <View className="flex-row justify-between items-center m-5">
        <View>
          <Icon
            name="medal-outline"
            size={25}
            color="#FDD36A"
            type="ionicon"
          />
          <Text className="text-lg font-bold">{points}</Text>
        </View>

        <View>
          <Text className="mb-2 font-bold text-base">{title}</Text>
          <View className="flex-row items-center space-x-3">
            <Image
              source={require('../assets/img/avatar1.png')}
              style={styles.avatar}
            />
            <Text style={styles.textWrap}>{message}</Text>
          </View>
          <Text className="italic mt-2">{requester}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecentCard;

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
  },

  textWrap: {
    flexWrap: 'wrap',
    width: 250,
  },
});
