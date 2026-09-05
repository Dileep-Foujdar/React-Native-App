import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider'
import { commonStyles } from '../../assets/style/style'
import { colors } from '../../assets/typography'
import ThreePartButton from '../../components/ThreePartButton'

const AgeScreen = () => {
  return (
    <View style={commonStyles.container1}>
      <View style={commonStyles.Goback}>
        <ThreePartButton midText="Age" />
      </View>
      <View
        style={{
          backgroundColor: colors.secondary,
          margin: 20,
          padding: 15,
          borderRadius: 14,
        }}
      >
        <Slider
          style={{ width: '100%', height: 50 }}
          minimumValue={0}
          lowerLimit={5}
          maximumValue={10}
          minimumTrackTintColor="#EBFF00"
          maximumTrackTintColor={colors.normalText}
          thumbTintColor="#EBFF00"
          thumbSize={15}
        />
      </View>
    </View>
  )
}

export default AgeScreen

const styles = StyleSheet.create({})