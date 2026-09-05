import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import GoBack from '../../../components/GoBack';
import { commonStyles } from '../../../assets/style/style';
import ProcessLine from '../../../components/ProcessLine';
import Button from '../../../components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigations/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '../../../components/CheckBox';
import { images } from '../../../assets/images/image';
import GenderModal from '../../../components/GenderModal';
import GoBackOtherButton from '../../../components/GoBackOtherButton';

type PropsType = NativeStackNavigationProp<RootStackParamList, 'lookingfor'>;

const InterstedScreen = () => {
  const navigation = useNavigation<PropsType>();
  const [selectgender, setSelectGender] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [showOnProfile, setShowOnProfile] = useState(true);
  

  const handleButton = () => {
    if (!selectgender) {
      Alert.alert('All about you');
    } else {
      navigation.navigate('lookingfor');
    }
  };
  return (
    <View style={commonStyles.container1}>
      <ProcessLine width={'72%'} />
      <View style={commonStyles.Goback}>
        <GoBackOtherButton onPress={()=>navigation.navigate('lookingfor')} />
      </View>
      <View style={{ paddingHorizontal: 25, paddingTop: 25, gap: 10 }}>
        <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
          I’m interested in
        </Text>
        <View style={{ gap: 10 }}>
          <CheckBox
            onPress={() =>
              setSelectGender(prev => (prev === 'Man' ? '' : 'Man'))
            }
            select={selectgender === 'Man'}
            genderName="Males"
          />
          <CheckBox
            onPress={() =>
              setSelectGender(prev => (prev === 'Females' ? '' : 'Females'))
            }
            select={selectgender === 'Females'}
            genderName="Females"
          />
          <CheckBox
            onPress={() =>
              setSelectGender(prev => (prev === 'Male + Female couple' ? '' : 'Male + Female couple'))
            }
            select={selectgender === 'Male + Female couple'}
            genderName="Male + Female couple"
          />
          <CheckBox
            onPress={() =>
              setSelectGender(prev => (prev === 'Male + Male couple' ? '' : 'Male + Male couple'))
            }
            select={selectgender === 'Male + Male couple'}
            genderName="Male + Male couple"
          />
          <CheckBox
            onPress={() =>
              setSelectGender(prev => (prev === 'Female + Female couple' ? '' : 'Female + Female couple'))
            }
            select={selectgender === 'Female + Female couple'}
            genderName="Female + Female couple"
          />
          <Button
            title="More gender options"
            buttonColor="#262A34"
            rightIcon={images.backIcon}
            rightStyle={{
              transform: [{ rotate: '180deg' }],
            }}
            style={{ borderRadius: 14, justifyContent: 'space-between' }}
            onPress={() => {
              setOpenModal(prev => !prev);
            }}
          />
          {selectgender && showOnProfile && (
  <View
    style={{
      flexDirection: 'row',
      alignSelf: 'flex-start',
      backgroundColor: '#EBFF00',
      borderRadius: 50,
      paddingHorizontal: 20,
      paddingVertical: 10,
      alignItems: 'center',
      gap: 15,
    }}
  >
    <Text
      style={[
        commonStyles.smallText,
        {
          color: 'black',
          fontFamily: 'bordan',
        },
      ]}
    >
      {selectgender}
    </Text>

    <TouchableOpacity onPress={() => setSelectGender('')}>
      <Image source={images.closeIcon} />
    </TouchableOpacity>
  </View>
)}
        </View>
      </View>

      <View style={styles.button}>
        <View
          style={{ height: 1, width: '100%', backgroundColor: '#262A34' }}
        />
        <View style={{ paddingHorizontal: 25 }}>
          <Button
             onPress={() => setShowOnProfile(prev => !prev)}
            buttonColor="#262A34"
            rightIcon={showOnProfile ? images.switchOn : images.switchOff}
            style={{
              borderRadius: 14,
              marginBottom: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            title="Show on my Profile"
          />
          <View style={{ opacity: selectgender ? 1 : 0.4 }}>
            <Button
              title="Continue"
              buttonColor="#EBFF00"
              textColor="black"
              isDisabled={!selectgender}
              onPress={handleButton}
            />
          </View>
        </View>
      </View>
      <GenderModal
        selectgender={selectgender}
        onSelectgender={setSelectGender}
        visible={openModal}
        onClose={() => setOpenModal(false)}
      />
    </View>
  );
};

export default InterstedScreen;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    gap: 10,
    bottom: 25,
    width: '100%',
  },
});
