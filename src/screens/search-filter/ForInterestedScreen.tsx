import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { commonStyles } from '../../assets/style/style';
import Button from '../../components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '../../components/CheckBox';
import { images } from '../../assets/images/image';
import GenderModal from '../../components/GenderModal';
import ThreePartButton from '../../components/ThreePartButton';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import {
  setSelectedGender,
  clearSelectedGender,
} from '../../redux/slices/genderSlice';
import type { RootState } from '../../redux/sotre';

type PropsType = NativeStackNavigationProp<RootStackParamList, 'lookingfor'>;

const ForInterestedScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<PropsType>();

  const selectgender = useSelector(
    (state: RootState) => state.gender.selectedGender,
  );
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleButton = () => {
    if (!selectgender) {
      Alert.alert('All about you');
    } else {
      navigation.navigate('filter');
    }
};
const handleGenderSelect = (gender: string) => {
  dispatch(setSelectedGender(gender));
};
  return (
    <View style={commonStyles.container1}>
      <View style={commonStyles.Goback}>
        <ThreePartButton
          midText="I’m interested in"
          onPress={() => navigation.navigate('lookingfor')}
        />
      </View>
      <View style={{ paddingHorizontal: 25, paddingTop: 25, gap: 10 }}>
        <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
          I’m interested in
        </Text>
        <View style={{ gap: 10 }}>
          <CheckBox
            onPress={() => {
              dispatch(setSelectedGender(selectgender === 'Man' ? '' : 'Man'));
            }}
            select={selectgender === 'Man'}
            genderName="Males"
          />
          <CheckBox
            onPress={() =>
              dispatch(
                setSelectedGender(selectgender === 'Females' ? '' : 'Females'),
              )
            }
            select={selectgender === 'Females'}
            genderName="Females"
          />
          <CheckBox
            onPress={() =>
              dispatch(
                setSelectedGender(
                  selectgender === 'Male + Female couple'
                    ? ''
                    : 'Male + Female couple',
                ),
              )
            }
            select={selectgender === 'Male + Female couple'}
            genderName="Male + Female couple"
          />
          <CheckBox
            onPress={() =>
              dispatch(
                setSelectedGender(
                  selectgender === 'Male + Male couple'
                    ? ''
                    : 'Male + Male couple',
                ),
              )
            }
            select={selectgender === 'Male + Male couple'}
            genderName="Male + Male couple"
          />
          <CheckBox
            onPress={() =>
              dispatch(
                setSelectedGender(
                  selectgender === 'Female + Female couple'
                    ? ''
                    : 'Female + Female couple',
                ),
              )
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
          {selectgender && (
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

              <TouchableOpacity onPress={() => setSelectedGender('')}>
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
          <View style={{ opacity: selectgender ? 1 : 0.4 }}>
            <Button
              title="Apply"
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
        onSelectgender={handleGenderSelect}
        visible={openModal}
        onClose={() => setOpenModal(false)}
      />
    </View>
  );
};

export default ForInterestedScreen;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    gap: 10,
    bottom: 25,
    width: '100%',
  },
});
