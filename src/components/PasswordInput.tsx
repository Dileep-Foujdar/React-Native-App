import {
  StyleSheet,
  TextInput,
  View,
  StyleProp,
  TextStyle,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { ImageSourcePropType } from 'react-native';

interface InputTextProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style?: StyleProp<TextStyle>;
  icon?: ImageSourcePropType | string;
  lockIcon?: ImageSourcePropType | string;
}

const PasswordInput = ({
  placeholder = '',
  value = '',
  onChangeText = () => {},
  style,
  icon,
  lockIcon,
}: InputTextProps) => {
    const [isPassShow,setIsPassShow] = useState(false);
    const [focus,setisFocus] = useState(false);
  return (
    <View style={{ width: '100%', marginTop: 10 }}>
      <View style={[styles.container,{borderColor: focus?'#EBFF00':'#262A34'}]}>
        <View style={styles.innerContainer}>
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
          onFocus={()=>setisFocus(true)}
          onBlur={()=>{setisFocus(false)}}
          onChangeText={onChangeText}
          style={[styles.input, style]}
          secureTextEntry={isPassShow}
        />
        </View>
        <TouchableOpacity style={styles.showBtn} onPress={()=>setIsPassShow(!isPassShow)}>
            {lockIcon && (
          <Image
            source={
              typeof lockIcon === 'string'
                ? { uri: lockIcon } // remote URL
                : lockIcon // local image
            }
          />
        )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#262A34',
    width: '100%',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth:1
  },
  input: {
    borderRadius: 10,
    fontSize: 16,
    color:"white",
    width:'90%',
    fontFamily:'bordan'
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  showBtn:{
    position:'absolute',
    right:15,
    bottom:'35%'
  }
});
