import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { images } from '../assets/images/image'

const GoBack = () => {
    const navigation = useNavigation()
  return (
    <View style={{justifyContent: 'center',paddingHorizontal: 20}}>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.goBack()}>
        <Image style={styles.image} source={images.backIcon} />
      </TouchableOpacity>
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
  image:{
    height: 40,
    width: 40
  }
})

export default GoBack