import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import GoBack from '../../../components/GoBack';
import { commonStyles } from '../../../assets/style/style';
import ProcessLine from '../../../components/ProcessLine';
import Button from '../../../components/Button';
import SimpleInputText from '../../../components/SimpleTextInput';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigations/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import { setnewname,clearnewname } from '../../../redux/slices/nameSlice';
import { RootState } from '../../../redux/sotre';
import { useDispatch,useSelector } from 'react-redux';

type PropsType = NativeStackNavigationProp<
  RootStackParamList,
  'chooseSingleName'
>;

const ImaginaryNameScreen = () => {
  const navigation = useNavigation<PropsType>();
  const dispatch = useDispatch();

  const name = useSelector(
    (state:RootState)=> state.username.userName
  )

  const handleClick = () => {
    if (!name) {
      Alert.alert('Enter a name');
    } else {
      navigation.navigate('singledob');
    }
  };
  
  return (
    <View style={commonStyles.container1}>
      <ProcessLine width={'12%'} />

      <View style={commonStyles.Goback}>
        <GoBack />
      </View>
      <View style={{ paddingHorizontal: 25, paddingTop: 25, gap: 10 }}>
        <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
          Imaginary name
        </Text>

        <Text style={[commonStyles.whiteText, commonStyles.smallText]}>
          Pineapple encourages the use of imaginary names. Be open, never
          exposed.
        </Text>

        <SimpleInputText
          placeholder="Imaginary name"
          value={name}
          onChangeText={text=>dispatch(setnewname(text))}
          maxLength={20}
          showSuccess={name.length > 0}
        />
        
        <Text
          style={[
            commonStyles.whiteText,
            commonStyles.smallText,
            { textAlign: 'right' },
          ]}
        >
          {name.length}/20
        </Text>
      </View>

      <View style={styles.button}>
        <Button
          title="Continue"
          buttonColor="#EBFF00"
          textColor="black"
          onPress={handleClick}
        />
      </View>
    </View>
  );
};

export default ImaginaryNameScreen;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 25,
    paddingHorizontal: 25,
    width: '100%',
  },
});
