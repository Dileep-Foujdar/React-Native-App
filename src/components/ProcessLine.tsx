import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DimensionValue } from 'react-native';

interface ProcessLineProps {
  width?: DimensionValue;
}

const ProcessLine = ({ width = '20%' }: ProcessLineProps) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 5,
        width: '100%',
        paddingHorizontal: 25,
      }}
      >
      <View
        style={{
          height: 5,
          width: '100%',
          backgroundColor: '#262A34',
          borderRadius: 100,
        }}
        >
        <View
          style={{
            backgroundColor: '#EBFF00',
            height: 4,
            width: width,
            borderRadius: 100,
          }}
        />
      </View>
    </View>
  );
};

export default ProcessLine;

const styles = StyleSheet.create({});
