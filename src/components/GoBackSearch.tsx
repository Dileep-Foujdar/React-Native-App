import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { images } from '../assets/images/image';
import Button from './Button';
import InputText from './InputText';
import SimpleInputText from './SimpleTextInput';

interface propsType {
    onPress?:()=>void;
    onChangeText?:(text:string)=>void;
    value?:string;
}

const GoBackSearch = ({onChangeText,onPress,value }: propsType) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems:'center',
        gap:10,
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Image style={styles.image} source={images.backIcon} />
      </TouchableOpacity>
      <View style={{}}>
        <SimpleInputText
          icon={images.SearchIcon}
          icon2={images.filterIcon}
          placeholder="Search"
            style={{width:180}}
            value={value}
            onPress={onPress}
            onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
  },
  image: {
    height: 40,
    width: 40,
  },
});

export default GoBackSearch;
