import React from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Linking } from 'react-native';
import { RootStackParamList } from '../navigations/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type PropsType = NativeStackNavigationProp<RootStackParamList, 'signUpOption'>;

interface MailModelProps {
  visible: boolean;
  onClose: () => void;
}

const TrackingModal = ({ visible, onClose }: MailModelProps) => {
  const navigation = useNavigation<PropsType>();
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity onPress={onClose} style={styles.overlay}>
        <Pressable onPress={() => !onClose} style={styles.container}>
          <View style={styles.btnView}>
            <Text style={styles.title}>
              Allow ''Pineapple'' to track your activity across other companies
              and websites?
            </Text>
            <Text style={styles.buttonText}>
              Pineapple would like permission to track your usage with the app
              to give your a personalised experience.
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('privacy')}
              style={[
                styles.textBtn,
                { borderTopColor: '#3C3C4399', borderTopWidth: 1 },
              ]}
            >
              <Text style={styles.subtitle}>Ask app not to track</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('privacy')}
              style={[
                styles.textBtn,
                { borderTopColor: '#3C3C4399', borderTopWidth: 1 },
              ]}
            >
              <Text style={styles.subtitle}>Allow</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </TouchableOpacity>
    </Modal>
  );
};

export default TrackingModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    // backgroundColor: '#262A34',
    borderRadius: 12,
  },
  btnView: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: 600,
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  subtitle: {
    color: '#007AFF',
    fontSize: 18,
  },
  button: {
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    alignItems: 'center',
    padding: 14,
  },
  buttonText: {
    color: '#000',
    fontWeight: '400',
    textAlign: 'center',
    fontSize: 14,
    paddingBottom: 10,
  },
  textBtn: {
    paddingVertical: 12,
    color: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
