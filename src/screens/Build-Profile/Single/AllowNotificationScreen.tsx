import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigations/RootNavigator';
import { commonStyles } from '../../../assets/style/style';
import GoBack from '../../../components/GoBack';
import { images } from '../../../assets/images/image';
import Button from '../../../components/Button';
import NotificationModal from '../../../components/NotificationModal';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type PropsType = NativeStackNavigationProp<RootStackParamList, 'feedscreen'>;

const AllowNotificationScreen = () => {
  const requestLocationPermission = async () => {
    if (Platform.OS !== 'android') {
      return false;
    }

    try {
      const result = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);

      const fineLocation =
        result[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION];

      const coarseLocation =
        result[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION];

      if (
        fineLocation === PermissionsAndroid.RESULTS.GRANTED ||
        coarseLocation === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('✅ Location permission granted');
        return true;
      }

      console.log('❌ Location permission denied');
      return false;
    } catch (error) {
      console.log('Location permission error:', error);
      return false;
    }
  };

  const navigation = useNavigation<PropsType>();
  const [visible, setVisible] = useState(false);
  const handlebtn = () => {
    navigation.navigate('feedscreen');
  };
  return (
    <View style={commonStyles.container1}>
      <View style={commonStyles.Goback}>
        <GoBack />
      </View>
      <View style={[styles.BottomView, { paddingTop: visible ? 80 : 120 }]}>
        <View style={styles.yelloBtn}>
          <Image source={images.blackEmailIcon} />
        </View>
        <Text style={[commonStyles.whiteText, styles.heading]}>
          Allow notifications
        </Text>
        <Text style={[commonStyles.whiteText, styles.subHeading]}>
          Don’t miss a thing. Get notified when you get a new message.
        </Text>
        <Button
          title="I want to be notified"
          buttonColor="#EBFF00"
          textColor="#000"
          style={{ width: '100%', borderRadius: 100 }}
          onPress={() => setVisible(true)}
        />
        <TouchableOpacity
          onPress={async () => {
            const granted = await requestLocationPermission();

            if (granted) {
              navigation.navigate('feedscreen');
            }
          }}
        >
          <Text style={[commonStyles.whiteText, styles.textBtn]}>Not now</Text>
        </TouchableOpacity>
      </View>
      <NotificationModal visible={visible} onClose={() => setVisible(false)} />
    </View>
  );
};

export default AllowNotificationScreen;

const styles = StyleSheet.create({
  yelloBtn: {
    backgroundColor: '#EBFF00',
    height: 110,
    width: 110,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    gap: 15,
  },
  subHeading: {
    color: '#A5A7AF',
    fontSize: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
  },
  textBtn: {
    fontSize: 20,
  },
});
