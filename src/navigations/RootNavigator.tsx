import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/login-signup/SplashScreen';
import SliderScreen from '../screens/login-signup/SliderScreen';
import SignUpOptionScreen from '../screens/login-signup/SignUpOptionScreen';
import SignInWithEmailScreen from '../screens/login-signup/SignInWithEmailScreen';
import ForgateScreen from '../screens/login-signup/ForgateScreen';
import ForgateInstructionScreen from '../screens/login-signup/ForgateInstructionScreen';
import PrivacyScreen from '../screens/login-signup/PrivacyScreen';
import EmailVerificationScreen from '../screens/login-signup/EmailVerificationScreen';
import CheckInboxScreen from '../screens/login-signup/CheckInboxScreen';
import ChooseSingleCoupleScreen from '../screens/Build-Profile/ChooseSingleCoupleScreen';
import ImaginaryNameScreen from '../screens/Build-Profile/Single/ImaginaryNameScreen';
import DOBScreen from '../screens/Build-Profile/Single/DOBScreen';
import AboutScreen from '../screens/Build-Profile/Single/AboutScreen';
import SelectGenderScreen from '../screens/Build-Profile/Single/SelectGenderScreen';
import SexualityChooseScreen from '../screens/Build-Profile/Single/SexualityChooseScreen';
import InterstedScreen from '../screens/Build-Profile/Single/InterstedScreen';
import SelectLookingScreen from '../screens/Build-Profile/Single/SelectLookingScreen';
import ProfilePictureScreen from '../screens/Build-Profile/Single/ProfilePictureScreen';
import AllowNotificationScreen from '../screens/Build-Profile/Single/AllowNotificationScreen';
import FeedScreen from '../screens/Feed-Screens/FeedScreen';
import CoupleImaginaryNameScreen from '../screens/Build-Profile/couple/CoupleImaginaryNameScreen';
import CoupleDOBScreen from '../screens/Build-Profile/couple/CoupleDOBScreen';
import BottomNavigator from './BottomNavigation';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Login: undefined;
  signUpOption: undefined;
  signInWithEmail: undefined;
  forgate: undefined;
  forgateinst: {
    email: string;
  };
  privacy: undefined;
  verification: undefined;
  checkInbox: {
    email: string;
  };
  chooseoption: undefined;
  chooseSingleName: undefined;
  singledob: undefined;
  about: undefined;
  selectgender: undefined;
  selectsaxuality: undefined;
  interest: undefined;
  lookingfor: undefined;
  profilephoto: undefined;
  allownotification: undefined;
  feedscreen: undefined;
  couplename: undefined;
  coupledob: undefined;
};

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="slider" component={SliderScreen} />
      <Stack.Screen name="signUpOption" component={SignUpOptionScreen} />
      <Stack.Screen name="signInWithEmail" component={SignInWithEmailScreen} />
      <Stack.Screen name="forgate" component={ForgateScreen} />
      <Stack.Screen name="forgateinst" component={ForgateInstructionScreen} />
      <Stack.Screen name="privacy" component={PrivacyScreen} />
      <Stack.Screen name="verification" component={EmailVerificationScreen} />
      <Stack.Screen name="checkInbox" component={CheckInboxScreen} />
      <Stack.Screen name="chooseoption" component={ChooseSingleCoupleScreen} />
      <Stack.Screen name="chooseSingleName" component={ImaginaryNameScreen} />
      <Stack.Screen name="singledob" component={DOBScreen} />
      <Stack.Screen name="about" component={AboutScreen} />
      <Stack.Screen name="selectgender" component={SelectGenderScreen} />
      <Stack.Screen name="selectsaxuality" component={SexualityChooseScreen} />
      <Stack.Screen name="interest" component={InterstedScreen} />
      <Stack.Screen name="lookingfor" component={SelectLookingScreen} />
      <Stack.Screen name="profilephoto" component={ProfilePictureScreen} />
      <Stack.Screen
        name="allownotification"
        component={AllowNotificationScreen}
      />
      <Stack.Screen name="feedscreen" component={BottomNavigator} />
      <Stack.Screen name="couplename" component={CoupleImaginaryNameScreen} />
      <Stack.Screen name="coupledob" component={CoupleDOBScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
