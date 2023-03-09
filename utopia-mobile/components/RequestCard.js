import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';
import React from 'react';

const RequestCard = () => {
  const { width, height } = Dimensions.get('window');
  // const LATITUDE = 40.74333; // Korea Town, New York, NY 10001
  // const LONGITUDE = -73.99033; // Korea Town, New York, NY 10001
  const LATITUDE_DELTA = 0.01;
  const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

  return (
    <TouchableOpacity>
      <View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          liteMode={true}
        />
        <Text>RequestCard</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RequestCard;

const styles = StyleSheet.create({
  map: {
    height: 150,
  },
});
