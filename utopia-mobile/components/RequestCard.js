import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';
import React from 'react';
import { Image } from '@rneui/themed';
import { Icon } from '@rneui/base';

const RequestCard = ({
  name,
  description,
  points,
  time,
  latitude,
  longitude,
  img,
  imgReq,
}) => {
  const { width, height } = Dimensions.get('window');
  // const LATITUDE = 40.74333; // Korea Town, New York, NY 10001
  // const LONGITUDE = -73.99033; // Korea Town, New York, NY 10001
  const LATITUDE_DELTA = 0.01;
  const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);
  // const imgUrl = '../assets/img/' + img;
  // console.log(imgUrl);

  return (
    <TouchableOpacity className="my-2 rounded-lg pb-3 bg-white m-2 shadow-sm shadow-black">
      <View className="">
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          liteMode={true}
        />

        <View className="p-2 flex-row justify-around items-center">
          <View>
            <Image
              // source={require('../assets/img/avatar1.png')}
              source={imgReq}
              style={styles.avatar}
            />
            <Text className="">{name}</Text>
          </View>
          <Text>{description}</Text>
        </View>

        <View className="flex-row justify-between items-center px-2">
          <Text>{time}</Text>
          <View className="justify-end flex-row space-x-5">
            <View className="flex-row items-center">
              <Icon
                name="medal"
                size={25}
                color="#FDD36A"
                type="ionicon"
              />
              <Text>{points}</Text>
            </View>
            <View className="flex-row items-center">
              <Icon
                name="mail-outline"
                size={25}
                color="#1E6F5C"
                type="ionicon"
              />
              <Text>{points}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RequestCard;

const styles = StyleSheet.create({
  map: {
    height: 150,
  },
  avatar: {
    width: 50,
    height: 50,
  },
});
