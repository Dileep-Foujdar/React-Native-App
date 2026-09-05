import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { colors } from '../../assets/typography';
import { commonStyles } from '../../assets/style/style';
import ThreePartButton from '../../components/ThreePartButton';

const HeightScreen = () => {
  return (
    <View style={commonStyles.container1}>
      <View style={commonStyles.Goback}>
        <ThreePartButton midText="Height" />
      </View>
      <View
        style={{
          backgroundColor: colors.secondary,
          margin: 20,
          padding: 15,
          borderRadius: 14,
        }}
      >
        <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
          Any Height is fine
        </Text>
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
  );
};

export default HeightScreen;

const styles = StyleSheet.create({});
