import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { commonStyles } from '../../assets/style/style';
import { images } from '../../assets/images/image';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigations/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import TrackingModal from '../../components/TrackingModel';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'chooseoption'
>;

const ChooseSingleCoupleScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  const [visible,setVisible] = useState(false);
  return (
    <View style={commonStyles.container}>
      <Image source={images.logo} />
      <Text style={[commonStyles.whiteText, styles.h3]}>Let's get to know each other</Text>
      <Text style={[commonStyles.whiteText,styles.p]}>The more you tell us about what you want (what you really, really want), the better your matches will be. </Text>
      <Button
        onPress={() =>navigation.navigate('chooseSingleName')}
        title="I’m single"
        buttonColor="#262A34"
        style={styles.btnStyle}
      />
      <Button
        onPress={() =>navigation.navigate('couplename')}
        title="We’re a couple"
        buttonColor="#262A34"
        style={styles.btnStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  h3: {
    fontSize: 24,
    marginTop:15,

  },
  btnStyle: {
    width: '100%',
    paddingTop: 12,
    borderRadius: 100,
    paddingBottom: 12,
    marginTop:15
  },
  p: {
    fontSize: 18,
    color:'#A5A7AF',
    paddingTop:10
  },
  flexBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:15
  },
  bottomText:{
    color:'#A5A7AF',
    textAlign:'center',
    fontSize:14,
    position:'absolute',
    bottom:25,
    fontFamily:'bordan'
  }
});

export default ChooseSingleCoupleScreen;
