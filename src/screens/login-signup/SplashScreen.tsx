import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/RootNavigator';

type PropsType = NativeStackNavigationProp<RootStackParamList,'slider'>

const SplashScreen = () => {
  const navigation = useNavigation<PropsType>();
  return (
    <View style={styles.container}>
      <View style={styles.imgBox}>
        <ImageBackground
          style={styles.image}
          source={require('../../assets/images/background-image.jpg')}
        >
          <LinearGradient
            style={styles.gredient}
            colors={[
              'transparent',
              'rgba(26,27,34,0.2)',
              'rgba(26,27,34,0.6)',
              '#1A1B22',
            ]}
          />
          <View style={styles.upperContentBox}>
            <Image source={require('../../assets/images/logo.png')} />
            <Text style={styles.text}>
              To be able to use pineapple you must be 18 or older.
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.imgBox1}>
        <Button
          title="I’m 18"
          style={styles.buttonBox}
          onPress={() => navigation.navigate('slider')}
          buttonColor="#EBFF00"
          textColor="#000"
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1B22',
    flex: 1,
  },
  imgBox: {
    flex: 7,
    width: 'auto',
  },
  imgBox1: {
    flex: 3,
    backgroundColor: '#1A1B22',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gredient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 200,
  },
  upperContentBox: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  text: {
    fontSize: 26,
    color: 'white',
    fontFamily: 'bordan',
    textAlign: 'center',
  },
  buttonBox: {
    width: '30%',
    fontFamily: 'bordan',
  },
});
