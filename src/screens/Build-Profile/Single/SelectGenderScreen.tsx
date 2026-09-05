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
import { useDispatch, useSelector } from 'react-redux';
import {
  selectsinglegender,
  clearselectedgender,
} from '../../../redux/slices/singleGenderSlice';
import { RootState } from '../../../redux/sotre';

type PropsType = NativeStackNavigationProp<
  RootStackParamList,
  'selectsaxuality'
>;

const SelectGenderScreen = () => {
  const navigation = useNavigation<PropsType>();
  const dispatch = useDispatch();
  const gender = useSelector((state: RootState) => state.singlegender.gender);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [showOnProfile, setShowOnProfile] = useState(true);

  const handleButton = () => {
    if (!gender) {
      Alert.alert('All about you');
    } else {
      navigation.navigate('selectsaxuality');
    }
  };
  return (
    <View style={commonStyles.container1}>
      <ProcessLine width={'48%'} />
      <View style={commonStyles.Goback}>
        <GoBack />
      </View>
      <View style={{ paddingHorizontal: 25, paddingTop: 25, gap: 10 }}>
        <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
          Please select your gender
        </Text>
        <Text
          style={[
            commonStyles.smallText,
            commonStyles.whiteText,
            { textAlign: 'left' },
          ]}
        >
          Everyone’s welcome!
        </Text>
        <View style={{ gap: 10 }}>
          <CheckBox
            onPress={() => {
              if (gender === 'Man') {
                dispatch(clearselectedgender());
              } else {
                dispatch(selectsinglegender('Man'));
              }
            }}
            select={gender === 'Man'}
            genderName="Man"
          />
          <CheckBox
            onPress={() => {
              if (gender === 'Women') {
                dispatch(clearselectedgender());
              } else {
                dispatch(selectsinglegender('Women'));
              }
            }}
            select={gender === 'Women'}
            genderName="Women"
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
          {gender && showOnProfile && (
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
                {gender}
              </Text>

              <TouchableOpacity onPress={() => dispatch(clearselectedgender())}>
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
          <View style={{ opacity: gender ? 1 : 0.4 }}>
            <Button
              title="Continue"
              buttonColor="#EBFF00"
              textColor="black"
              isDisabled={!gender}
              onPress={handleButton}
            />
          </View>
        </View>
      </View>
      <GenderModal
        selectgender={gender}
        onSelectgender={(selectedGender: string) =>
          dispatch(selectsinglegender(selectedGender))
        }
        visible={openModal}
        onClose={() => setOpenModal(false)}
      />
    </View>
  );
};

export default SelectGenderScreen;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    gap: 10,
    bottom: 25,
    width: '100%',
  },
});
