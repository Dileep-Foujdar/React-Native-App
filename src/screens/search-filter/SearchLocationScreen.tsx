import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputText from '../../components/InputText'
import { images } from '../../assets/images/image'

const SearchLocationScreen = () => {
  return (
    <View>
      <InputText placeholder='Enter your city' icon={images.SearchIcon} />
    </View>
  )
}

export default SearchLocationScreen

const styles = StyleSheet.create({})