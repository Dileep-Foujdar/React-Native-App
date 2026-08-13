import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Linking } from 'react-native';

interface MailModelProps {
  visible: boolean;
  onClose: () => void;
}

const MailModel = ({ visible, onClose }: MailModelProps) => {
  const openMailApp = async () => {
    const url = 'mailto:';

    const supported = await Linking.canOpenURL(url);

    if (supported) {
      Linking.openURL(url);
    }else{
        Linking.openURL('https://mail.google.com');
    }
  };
  const openGmail = async () => {
    const url = 'googlegmail://';

    const supported = await Linking.canOpenURL(url);

    if (supported) {
      Linking.openURL(url);
    } else {
      Linking.openURL('https://mail.google.com');
    }
  };
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity onPress={onClose} style={styles.overlay}>
        <TouchableOpacity onPress={() => !onClose} style={styles.container}>
          <View style={styles.btnView}>
            <Text style={styles.title}>Which app would you like to open?</Text>
            <TouchableOpacity
              onPress={openMailApp}
              style={[
                styles.textBtn,
                { borderTopColor: '#3C3C4399', borderTopWidth: 1 },
              ]}
            >
              <Text style={styles.subtitle}>Mail</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={openGmail}
              style={[
                styles.textBtn,
                { borderTopColor: '#3C3C4399', borderTopWidth: 1 },
              ]}
            >
              <Text style={styles.subtitle}>Gmail</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default MailModel;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '95%',
    position: 'absolute',
    bottom: 25,
    // backgroundColor: '#262A34',
    borderRadius: 12,
  },
  btnView: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 12,
  },
  title: {
    color: '#3C3C4399',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
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
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 18,
  },
  textBtn: {
    paddingVertical: 16,
    color: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
