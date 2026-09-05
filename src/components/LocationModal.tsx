import React from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  View,
} from 'react-native';
import { RootStackParamList } from '../navigations/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type PropsType = NativeStackNavigationProp<RootStackParamList, 'signUpOption'>;

interface MailModelProps {
  visible: boolean;
  onClose: () => void;
}

const LocationModal = ({ visible, onClose }: MailModelProps) => {
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
      onClose();
      navigation.navigate('distance');
    }
  };
  
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      {/* OUTSIDE AREA */}
      <Pressable style={styles.overlay} onPress={onClose}>
        {/* MODAL BOX */}
        <Pressable style={styles.container} onPress={() => {}}>
          <View style={styles.btnView}>
            <Text style={styles.title}>
              “Pineapple” Would Like to Send You Notifications
            </Text>

            <Text style={styles.buttonText}>
              Notifications may include alerts, sounds and icon badges. These
              can be configured in Settings.
            </Text>

            <View style={styles.buttonsRow}>
              <TouchableOpacity
                onPress={() => onClose()}
                style={styles.textBtn}
              >
                <Text style={styles.subtitle}>Don‘t Allow</Text>
              </TouchableOpacity>

              <View style={styles.divider} />

              <TouchableOpacity onPress={handleClose} style={styles.textBtn}>
                <Text style={styles.subtitle}>Allow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default LocationModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    width: '80%',
    borderRadius: 12,
  },

  btnView: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 12,
    overflow: 'hidden',
  },

  title: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  buttonText: {
    color: '#000',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 14,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderTopColor: '#999',
  },

  textBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subtitle: {
    color: '#007AFF',
    fontSize: 18,
  },

  divider: {
    width: 1,
    backgroundColor: '#999',
  },
});
