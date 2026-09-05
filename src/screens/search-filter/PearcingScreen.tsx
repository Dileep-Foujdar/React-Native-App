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
import ThreePartButton from '../../components/ThreePartButton';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import {
  setselectPearcing,
  clearSelectPeircing,
} from '../../redux/slices/piercingSlice';
import type { RootState } from '../../redux/sotre';

type PropsType = NativeStackNavigationProp<RootStackParamList, 'lookingfor'>;

const PearcingScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<PropsType>();

  const selectgender = useSelector(
    (state: RootState) => state.peircing.selectpiercing,
  );

  const handleButton = () => {
    if (!selectgender) {
      Alert.alert('All about you');
    } else {
      navigation.goBack();
    }
  };
  return (
    <View style={commonStyles.container1}>
      <View style={commonStyles.Goback}>
        <ThreePartButton midText="Piercings" onPress={() => {}} />
      </View>
      <View style={{ paddingHorizontal: 25, paddingTop: 25, gap: 10 }}>
        <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
          I’m interested in
        </Text>
        <View style={{ gap: 10 }}>
          <CheckBox
            onPress={() => {
              dispatch(setselectPearcing(selectgender === 'Yes' ? '' : 'Yes'));
            }}
            select={selectgender === 'Yes'}
            genderName="Yes"
          />
          <CheckBox
            onPress={() =>
              dispatch(setselectPearcing(selectgender === 'No' ? '' : 'No'))
            }
            select={selectgender === 'No'}
            genderName="No"
          />
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
    </View>
  );
};

export default PearcingScreen;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    gap: 10,
    bottom: 25,
    width: '100%',
  },
});
