import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { commonStyles } from '../assets/style/style';
import { images } from '../assets/images/image';

interface PropsType {
  genderName: string;
  select: boolean;
  onPress:()=> void;
}

const CheckBox = ({ genderName,select,onPress }: PropsType) => {

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View
          style={{
            backgroundColor: '#262A34',
            padding: 16,
            borderRadius: 12,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={[commonStyles.smallText, { textAlign: 'left' }]}>
            {genderName}
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: select === true ? '#EBFF00':'white',
              height: 26,
              width: 26,
              borderRadius: 4,
            }}
          >
            <Image
              style={{ display: select === true ? 'flex' : 'none' }}
              source={images.blackRightSign}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({});
