import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ProfileTabScreen from '../screens/Profile/ProfileTabScreen';
import ProfileGridScreen from '../screens/Profile/ProfileGridScreen';
import ProfileListScreen from '../screens/Profile/ProfileListScreen';

import {images} from '../assets/images/image';

export type ProfileTopTabParamList = {
  Profile: undefined;
  Grid: undefined;
  List: undefined;
};

const Tab = createMaterialTopTabNavigator<ProfileTopTabParamList>();

const ProfileTopNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: true,

        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: '#191A20',
          height: 55,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: '#36373D',
        },

        tabBarIndicatorStyle: {
          backgroundColor: '#EBFF00',
          height: 2,
        },
      }}>

      {/* PROFILE */}
      <Tab.Screen
        name="Profile"
        component={ProfileTabScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? images.profileActiveIcon
                  : images.profileIcon
              }
              style={styles.icon}
            />
          ),
        }}
      />

      {/* GRID */}
      <Tab.Screen
        name="Grid"
        component={ProfileGridScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? images.activegridicon
                  : images.gridicon
              }
              style={styles.icon}
            />
          ),
        }}
      />

      {/* LIST */}
      <Tab.Screen
        name="List"
        component={ProfileListScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? images.activelisticon
                  : images.listicon
              }
              style={styles.icon}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default ProfileTopNavigator;

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
});