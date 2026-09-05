import {
  StyleSheet,
  TextInput,
  View,
  StyleProp,
  TextStyle,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { ImageSourcePropType } from 'react-native';

interface InputTextProps {
  placeholder?: string;
  value?: string;
  maxLength?: number;
  showSuccess?: boolean;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
  icon?: ImageSourcePropType | string;
  icon2?: ImageSourcePropType | string;
}

const InputText = ({
  placeholder = '',
  value = '',
  onChangeText = () => {},
  onPress = () => {},
  style,
  icon2,
  icon,
}: InputTextProps) => {
  const [isFocus, setisFocus] = useState(false);
  return (
    <View style={{ width: '100%', marginTop: 10 }}>
      <View
        style={[
          styles.container,
          {
            borderColor: isFocus ? '#EBFF00' : '#262A34',
            alignItems: 'center',
          },
        ]}
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
          onFocus={() => setisFocus(true)}
          onBlur={() => {
            setisFocus(false);
          }}
          onChangeText={onChangeText}
          style={[styles.input, style]}
        />
        <TouchableOpacity onPress={onPress}>
          {icon && (
            <Image
              source={
                typeof icon2 === 'string'
                  ? { uri: icon2 } // remote URL
                  : icon2 // local image
              }
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#262A34',
    width: '100%',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 5,
    gap: 4,
    borderWidth: 1,
  },
  input: {
    borderRadius: 10,
    fontSize: 16,
    width: '100%',
    color: 'white',
    fontFamily: 'bordan',
  },
});
