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
import CoupleImaginaryNameScreen from '../screens/Build-Profile/couple/CoupleImaginaryNameScreen';
import CoupleDOBScreen from '../screens/Build-Profile/couple/CoupleDOBScreen';
import BottomNavigator from './BottomNavigation';
import CommentScreen from '../screens/Feed-Screens/CommentScreen';
import SearchScreen from '../screens/search-filter/SearchScreen';
import FilterScreen from '../screens/search-filter/FilterScreen';
import ForInterestedScreen from '../screens/search-filter/ForInterestedScreen';
import KinksScreen from '../screens/search-filter/KinksScreen';
import BodyTypeScreen from '../screens/search-filter/BodyTypeScreen';
import DistanceScreen from '../screens/search-filter/DistanceScreen';
import LocationSearchScreen from '../screens/search-filter/LocationSearchScreen';
import NotificationScreen from '../screens/Feed-Screens/NotificationScreen';
import DrinkingScreen from '../screens/search-filter/DrinkingScreen';
import HeightScreen from '../screens/search-filter/HeightScreen';
import PearcingScreen from '../screens/search-filter/PearcingScreen';
import ReligionScreen from '../screens/search-filter/ReligionScreen';
import SaxualityScreen from '../screens/search-filter/SaxualityScreen';
import SmookingScreen from '../screens/search-filter/SmookingScreen';
import TattoosScreen from '../screens/search-filter/TattoosScreen';
import AgeScreen from '../screens/search-filter/AgeScreen';
import ProfileTopNavigator from './ProfileTopNavigation';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  slider:undefined;
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
  comment: undefined;
  search: undefined;
  filter:undefined;
  filterinterested:undefined;
  kinks:undefined;
  bodytype:undefined;
  distance:undefined;
  locationsearch:undefined;
  notification:undefined;
  drinking:undefined;
  height:undefined;
  pearcing:undefined;
  religion:undefined;
  saxuality:undefined;
  smooking:undefined;
  tattoos:undefined;
  age:undefined;
  profilenavigation:undefined;
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
      <Stack.Screen name="height" component={HeightScreen} />
      <Stack.Screen
        name="allownotification"
        component={AllowNotificationScreen}
      />
      <Stack.Screen name="feedscreen" component={BottomNavigator} />
      <Stack.Screen name="couplename" component={CoupleImaginaryNameScreen} />
      <Stack.Screen name="coupledob" component={CoupleDOBScreen} />
      <Stack.Screen name="comment" component={CommentScreen} />
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen name="age" component={AgeScreen} />
      <Stack.Screen name="filter" component={FilterScreen} />
      <Stack.Screen name="filterinterested" component={ForInterestedScreen} />
      <Stack.Screen name="kinks" component={KinksScreen} />
      <Stack.Screen name="bodytype" component={BodyTypeScreen} />
      <Stack.Screen name="distance" component={DistanceScreen} />
      <Stack.Screen name="locationsearch" component={LocationSearchScreen} />
      <Stack.Screen name="notification" component={NotificationScreen} />
      <Stack.Screen name="drinking" component={DrinkingScreen} />
      <Stack.Screen name="pearcing" component={PearcingScreen} />
      <Stack.Screen name="religion" component={ReligionScreen} />
      <Stack.Screen name="saxuality" component={SaxualityScreen} />
      <Stack.Screen name="smooking" component={SmookingScreen} />
      <Stack.Screen name="tattoos" component={TattoosScreen} />
      <Stack.Screen name="profilenavigation" component={ProfileTopNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
