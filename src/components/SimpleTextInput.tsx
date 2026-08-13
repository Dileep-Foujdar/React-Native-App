import {
  StyleSheet,
  TextInput,
  View,
  StyleProp,
  TextStyle,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { TextInputProps } from 'react-native';

interface InputTextProps extends TextInputProps {
  placeholder?: string;
  value?: string;
  maxLength?:number;
  showSuccess?: boolean ;
  onChangeText?: (text: string) => void;
  style?: StyleProp<TextStyle>;
  icon?: ImageSourcePropType | string;
  icon2?: ImageSourcePropType | string;
  multiline?: boolean;
  numberOfLines?: number;
}

const SimpleInputText = ({
  placeholder = '',
  value = '',
  onChangeText = () => {},
  style,
  maxLength,
  icon2,
  icon,
}: InputTextProps) => {
  return (
    <View style={{ width: '100%', marginTop: 10 }}>
      <View
        style={[styles.container,{borderColor: '#262A34'}]}
      >
        {icon && (
          <Image
            source={
              typeof icon === 'string'
                ? { uri: icon } // remote URL
                : icon // local image
            }
          />
        )}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, style]}
        />
         {icon && (
          <Image
            source={
              typeof icon2 === 'string'
                ? { uri: icon2 } // remote URL
                : icon2 // local image
            }
          />
        )}
      </View>
    </View>
  );
};

export default SimpleInputText;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
          backgroundColor: '#262A34',
          width: '100%',
          alignItems: 'center',
            borderRadius: 12,
            paddingHorizontal:15,
            paddingVertical:5,
            gap:4,
            borderWidth:1
  },
  input: {
    borderRadius: 10,
    fontSize: 16,
    width: '100%',
    color:'white',
    fontFamily:'bordan'
  },
});
