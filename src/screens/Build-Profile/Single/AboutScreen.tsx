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
import GoBackOtherButton from '../../../components/GoBackOtherButton';
import { useDispatch,useSelector } from 'react-redux';
import { clearaboutus,setaboutus } from '../../../redux/slices/aboutUsSlice';
import { RootState } from '../../../redux/sotre';


type PropsType = NativeStackNavigationProp<
  RootStackParamList,
  'about'
>;

const AboutScreen = () => {
  const navigation = useNavigation<PropsType>();
  const dispatch = useDispatch();
  const aboutus = useSelector(
    (state:RootState)=>state.aboutus.aboutUs
  )
  const handleButton = () =>{
    if(!setaboutus){
        Alert.alert("All about you");
    }else{
        navigation.navigate('selectgender')
    }
  }
  return (
    <View style={commonStyles.container1}>
      <ProcessLine width={'36%'}/>

      <View style={commonStyles.Goback}>
        <GoBackOtherButton buttonTitle="Skip" onPress={() => navigation.navigate('selectgender')} />
      </View>
      <View style={{ paddingHorizontal: 25, paddingTop: 25, gap: 10 }}>
        <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
          All about you
        </Text>

        <SimpleInputText
          placeholder="Add a short bio to introduce you as a couple"
          value={aboutus}
          maxLength={200}
          style={{height:100,textAlignVertical:'top'}}
          onChangeText={text=>dispatch(setaboutus(text))}
          multiline
          numberOfLines={5}
        />
      <Text
        style={[
          commonStyles.whiteText,
          commonStyles.smallText,
          { textAlign: 'right'},
        ]}
      >
        200 characters
      </Text>
      </View>

      <View style={styles.button}>
        <Button
          title="Continue"
          buttonColor="#EBFF00"
          textColor="black"
          onPress={handleButton}
        />
      </View>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 25,
    paddingHorizontal: 25,
    width: '100%',
  },
});
