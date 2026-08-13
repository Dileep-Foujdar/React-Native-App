import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { commonStyles } from '../../../assets/style/style';
import GoBack from '../../../components/GoBack';
import ProcessLine from '../../../components/ProcessLine';
import { images } from '../../../assets/images/image';
import { launchCamera } from 'react-native-image-picker';
import OpenCamaraModal from '../../../components/OpenCamaraModal';
import Button from '../../../components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigations/RootNavigator';
import { useNavigation } from '@react-navigation/native';

type PropsType = NativeStackNavigationProp<RootStackParamList,'allownotification'>

const ProfilePictureScreen = () => {
    const navigation = useNavigation<PropsType>();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      cameraType: 'back',
      saveToPhotos: true,
    });

    if (result.didCancel) {
      console.log('User cancelled camera');
      return;
    }

    if (result.errorCode) {
      console.log('Camera error:', result.errorMessage);
      return;
    }

    const photo = result.assets?.[0];

    if (photo?.uri) {
      console.log('Photo URI:', photo.uri);
    }
  };
  return (
    <View style={commonStyles.container1}>
      <ProcessLine width={'100%'} />
      <View style={commonStyles.Goback}>
        <GoBack />
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 40,
          gap: 40,
        }}
      >
        <Text style={[commonStyles.largeText, commonStyles.whiteText]}>
          Add your profile picture
        </Text>
        <TouchableOpacity
          onPress={() => setOpenModal(true)}
          style={{
            backgroundColor: '#EBFF00',
            width: 180,
            height: 180,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
          }}
        >
          {!imageUri && (
            <Image
              source={images.camaraIcon}
              style={{
                width: 40,
                height: 40,
              }}
            />
          )}
          {imageUri && (
            <Image
              source={{ uri: imageUri }}
              style={{
                width: 180,
                height: 180,
                borderRadius: 100,
              }}
            />
          )}
        </TouchableOpacity>
      </View>
      {imageUri && (
        <View
          style={[
            commonStyles.bottomButton,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            },
          ]}
        >
          <Button buttonColor='#1A1B22' onPress={() => {setImageUri('')}} title="Back" />
          <Button buttonColor='#EBFF00' textColor='black' onPress={() => navigation.navigate('allownotification')} title="Add this photo" />
        </View>
      )}
      <OpenCamaraModal
        onImageSelected={uri => {
          console.log('Selected image URI:', uri);
          setImageUri(uri);
        }}
        visible={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      />
    </View>
  );
};

export default ProfilePictureScreen;

const styles = StyleSheet.create({});
