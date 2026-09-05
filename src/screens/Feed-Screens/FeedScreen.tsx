import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles } from '../../assets/style/style';
import Header from '../../components/Header';

const FeedScreen = () => {
  return (
    <SafeAreaView style={commonStyles.container1}>
      <View style={{ position: 'absolute', width: '100%', top: 0 }}>
        <Header />
      </View>
    </SafeAreaView>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
