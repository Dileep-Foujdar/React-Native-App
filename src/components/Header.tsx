import { StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';
import { images } from '../assets/images/image';
import { colors } from '../assets/typography';

const Header = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.lineColor,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'center' }}>
        <View>
          <Image source={images.applogo} />
        </View>
        <View style={{ flexDirection: 'row', gap: 15,alignItems:'center' }}>
          <Image source={images.graySearchIcon} />
          <Image source={images.notificationIcon} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
