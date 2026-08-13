import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Feed-Screens/HomeScreen';
import FriendsScreen from '../screens/Feed-Screens/FriendsScreen';
import FlirtScreen from '../screens/Feed-Screens/FlirtScreen';
import ProfileScreen from '../screens/Feed-Screens/ProfileScreen';
import { Image, StyleSheet } from 'react-native';
import { images } from '../assets/images/image';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? images.homeActiveIcon : images.homeIcon;
          } else if (route.name === 'Friends') {
            iconName = focused
            ? images.friendIconActive
            : images.friendIcon;
          } else if (route.name === 'Flirt') {
            iconName = focused ? images.flirtActiveIcon : images.flirtIcon;
          } else {
            iconName = focused ? images.profileActiveIcon : images.profileIcon;
          }

          return (
            <Image source={iconName} style={styles.icon} resizeMode="contain" />
          );
        },

        tabBarActiveTintColor: '#EBFF00',
        tabBarInactiveTintColor: '#999999',

        tabBarStyle: {
          height: 60,
          backgroundColor: '#1A1B22',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Friends" component={FriendsScreen} />

      <Tab.Screen name="Flirt" component={FlirtScreen} />

      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
