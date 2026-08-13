import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity,Platform,PermissionsAndroid, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

interface MailModelProps {
  visible: boolean;
  onClose: () => void;
  onImageSelected: (uri:string) => void;
}

const OpenCamaraModal = ({
  visible,
  onClose,
  onImageSelected,
}: MailModelProps) => {
  const openCamera = async () => {
  try {
    if (Platform.OS === 'android') {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs camera permission to take your profile photo.',
          buttonPositive: 'Allow',
          buttonNegative: 'Cancel',
        },
      );

      if (permission !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission denied');
        return;
      }
    }

    console.log('Camera permission granted');

    const result = await launchCamera({
      mediaType: 'photo',
      cameraType: 'back',
      saveToPhotos: true,
    });

    console.log('Camera result:', result);

    if (result.didCancel) {
      console.log('User cancelled camera');
      return;
    }

    if (result.errorCode) {
      console.log(
        'Camera error:',
        result.errorCode,
        result.errorMessage,
      );
      return;
    }

    const uri = result.assets?.[0]?.uri;

    if (uri) {
      onImageSelected(uri);
      onClose();
    }
  } catch (error) {
    console.log('Camera exception:', error);
  }
};
  // 🖼️ Choose Photo
  const choosePhoto = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    });

    if (result.didCancel) {
      return;
    }

    if (result.errorCode) {
      console.log('Gallery Error:', result.errorMessage);
      return;
    }

    const uri = result.assets?.[0]?.uri;

    if (uri) {
      onImageSelected?.(uri);
      onClose();
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
        <TouchableOpacity onPress={() =>{}} style={styles.container}>
          <View style={styles.btnView}>
            <TouchableOpacity
              onPress={openCamera}
              style={[
                styles.textBtn,
                { borderTopColor: '#3C3C4399', borderTopWidth: 1 },
              ]}
            >
              <Text style={styles.subtitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={choosePhoto}
              style={[
                styles.textBtn,
                { borderTopColor: '#3C3C4399', borderTopWidth: 1 },
              ]}
            >
              <Text style={styles.subtitle}>Choose Photo</Text>
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

export default OpenCamaraModal;

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
    color: 'black',
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
