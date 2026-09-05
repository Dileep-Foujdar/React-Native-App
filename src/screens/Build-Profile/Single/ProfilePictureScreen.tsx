import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {commonStyles} from '../../../assets/style/style';
import GoBack from '../../../components/GoBack';
import ProcessLine from '../../../components/ProcessLine';
import {images} from '../../../assets/images/image';
import OpenCamaraModal from '../../../components/OpenCamaraModal';
import Button from '../../../components/Button';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigations/RootNavigator';
import {useNavigation} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/sotre';
import {
  setImageUri,
  clearImageUri,
} from '../../../redux/slices/profilePicSlice';

type PropsType = NativeStackNavigationProp<
  RootStackParamList,
  'allownotification'
>;

const ProfilePictureScreen = () => {
  const navigation = useNavigation<PropsType>();

  const dispatch = useDispatch();

  // Redux se image URI
  const imageUri = useSelector(
    (state: RootState) => state.proimg.imageUri,
  );

  // Modal ki state local hi rakho
  const [openModal, setOpenModal] = useState(false);

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
        }}>
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
            overflow: 'hidden',
          }}>
          
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
              source={{uri: imageUri}}
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
          ]}>
          
          <Button
            buttonColor="#1A1B22"
            onPress={() => dispatch(clearImageUri())}
            title="Back"
          />

          <Button
            buttonColor="#EBFF00"
            textColor="black"
            onPress={() =>
              navigation.navigate('allownotification')
            }
            title="Add this photo"
          />
        </View>
      )}

      <OpenCamaraModal
        visible={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        onImageSelected={uri => {
          console.log('Selected image URI:', uri);

          // Redux mein image URI save
          dispatch(setImageUri(uri));

          // Modal close
          setOpenModal(false);
        }}
      />
    </View>
  );
};

export default ProfilePictureScreen;

const styles = StyleSheet.create({});