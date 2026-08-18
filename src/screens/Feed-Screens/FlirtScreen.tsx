import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles } from '../../assets/style/style'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlirtHeader from '../../components/FlirtHeader'
import Header from '../../components/Header'

const FlirtScreen = () => {
  return (
    <SafeAreaView style={commonStyles.container1}>
      <View style={{ position: 'absolute', width: '100%', top: 0 }}>
        <Header />
      </View>
    </SafeAreaView>
  )
}

export default FlirtScreen

const styles = StyleSheet.create({})