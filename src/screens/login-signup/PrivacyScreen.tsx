import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { commonStyles } from '../../assets/style/style';
import GoBack from '../../components/GoBack';
import { images } from '../../assets/images/image';
import Button from '../../components/Button';
import { RootStackParamList } from '../../navigations/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type PropsType = NativeStackNavigationProp<RootStackParamList,'privacy'>

const PrivacyScreen = () => {
    const navigation = useNavigation<PropsType>();
  return (
    <View style={commonStyles.container1}>
      <View style={commonStyles.Goback}>
        <GoBack />
      </View>
      <View style={[styles.BottomView]}>
        <View style={styles.yelloBtn}>
          <Image source={images.blackWarningIcon} />
        </View>
        <Text style={[commonStyles.whiteText, styles.heading]}>
         Your privacy and protection is our main concern
        </Text>
        <Text style={[commonStyles.whiteText,styles.subHeading]}>We will never share you personal details or post on social media.</Text>
        <Button
          title="Let’s get started"
          buttonColor="#EBFF00"
          textColor='#000'
          style={{ width: '100%', borderRadius: 100 }}
          onPress={()=>navigation.navigate('chooseoption')}
        />
      </View>
      <View></View>
    </View>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  yelloBtn: {
    backgroundColor: '#EBFF00',
    height: 110,
    width: 110,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    gap: 20,
    paddingTop:120
  },
  subHeading: {
    color: '#A5A7AF',
    fontSize: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
  },
  textBtn: {
    fontSize: 20,
  },
});
