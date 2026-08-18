import { StyleSheet, Text, Image, View, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { images } from '../assets/images/image';
import { colors } from '../assets/typography';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/RootNavigator';
import { useNavigation } from '@react-navigation/native';

type PropsType = NativeStackNavigationProp<RootStackParamList, 'feedscreen'>;

const Header = () => {
  const navigation = useNavigation<PropsType>();
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.lineColor,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View>
          <Image source={images.applogo} />
        </View>
        <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
          <TouchableOpacity onPress={()=>navigation.navigate('search')}>
            <Image source={images.graySearchIcon} />
          </TouchableOpacity>
          <Image source={images.notificationIcon} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
