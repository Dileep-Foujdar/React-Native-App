import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { images } from '../assets/images/image'
import Button from './Button';

interface propsType{
 buttonTitle?:string;
 onPress: ()=>void;
}

const GoBackOtherButton = ({buttonTitle='Skip',onPress}:propsType) => {
    const navigation = useNavigation()
  return (
    <View style={{justifyContent: 'space-between',flexDirection:'row',paddingHorizontal: 20}}>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.goBack()}>
        <Image style={styles.image} source={images.backIcon} />
      </TouchableOpacity>
      <View style={styles.button2}>
        <Button title={buttonTitle} textColor='white' buttonColor='#1A1B22' onPress={onPress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button2:{
height: 40,
    width: 100
  },
  image:{
    height: 40,
    width: 40
  }
})

export default GoBackOtherButton