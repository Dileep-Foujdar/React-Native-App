import {
  StyleSheet,
  Text,
  View,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React from 'react';
import { commonStyles } from '../../assets/style/style';
import Button from '../../components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigations/RootNavigator';
import ThreePartButton from '../../components/ThreePartButton';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/sotre';
import Slider from '@react-native-community/slider';
import { images } from '../../assets/images/image';
import { colors } from '../../assets/typography';

type PropsType = NativeStackNavigationProp<RootStackParamList, 'interest'>;

const DistanceScreen = () => {
  const dispatch = useDispatch();

  const selectedBody = useSelector(
    (state: RootState) => state.body.selectedBody,
  );

  const navigation = useNavigation<PropsType>();

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
  const handleClose = async () => {
    const granted = await requestLocationPermission();

    if (granted) {
      navigation.navigate('distance');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={commonStyles.container1}>
        <View style={commonStyles.Goback}>
          <ThreePartButton midText="Distance" />
        </View>
        <View
          style={{
            flex: 6,
            paddingHorizontal: 20,
            paddingVertical: 20,
            gap: 10,
          }}
        >
          <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
            Search for users nearby
          </Text>
          <Button
            title="Use my current location"
            buttonColor="#262A34"
            rightIcon={images.switchOff}
            onPress={() => handleClose}
            style={{ justifyContent: 'space-between' }}
          />
          <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
            Nearby
          </Text>
          <View
            style={[
              {
                backgroundColor: colors.secondary,
                padding: 10,
                borderRadius: 14,
              },
            ]}
          >
            <Text
              style={[
                commonStyles.whiteText,
                commonStyles.smallText,
                { color: 'white' },
              ]}
            >
              Up to 5 miles away
            </Text>
            <Slider
              style={{ width: '100%', height: 50 }}
              minimumValue={0}
              maximumValue={10}
              minimumTrackTintColor="#EBFF00"
              maximumTrackTintColor={colors.normalText}
              thumbTintColor="#EBFF00"
              thumbSize={15}
            />
          </View>
          <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
            Search by location
          </Text>
          <Button
            title="Add location"
            style={{ justifyContent: 'space-between', borderRadius: 14 }}
            rightIcon={images.leftIcon}
            buttonColor={colors.secondary}
            onPress={() => navigation.navigate('locationsearch')}
          />
        </View>
        <View
          style={{
            backgroundColor: '#1A1B22',
            width: '100%',
            height: '12%',
          }}
        >
          <View style={commonStyles.bottomButton}>
            <View
              style={{
                opacity: selectedBody.length > 0 ? 1 : 1,
              }}
            >
              <Button
                title="Apply"
                onPress={() => navigation.goBack()}
                buttonColor="#EBFF00"
                textColor="black"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DistanceScreen;

const styles = StyleSheet.create({});
