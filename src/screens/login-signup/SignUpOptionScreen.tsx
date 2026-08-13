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
  'signInWithEmail'
>;

const SignUpOptionScreen = () => {
  const navigation = useNavigation<NavigationProp>()
  const [visible,setVisible] = useState(false);
  return (
    <View style={commonStyles.container}>
      <Image source={images.logo} />
      <Text style={[commonStyles.whiteText, styles.h3]}>Hello Sweet Stuff</Text>
      <Button
        onPress={() =>navigation.navigate('signInWithEmail')}
        title="Sign in with email"
        icon={images.logIcon}
        buttonColor="#262A34"
        style={styles.btnStyle}
      />
      <View style={styles.flexBox}>
        <TouchableOpacity onPress={()=>setVisible(true)}>
          <Text style={[commonStyles.whiteText, styles.p]}>
            Don’t have an account?{' '}
            <Text style={[styles.p, { color: '#EBFF00' }]}> Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.bottomText}>By signing up to Pineapple, you agree to our Terms and Privacy Policy.</Text>
      <TrackingModal visible={visible} onClose={()=>setVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  h3: {
    fontSize: 30,
    marginTop:15
  },
  btnStyle: {
    width: '100%',
    paddingTop: 12,
    borderRadius: 100,
    paddingBottom: 12,
    marginTop:35
  },
  p: {
    fontSize: 18,
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

export default SignUpOptionScreen;
