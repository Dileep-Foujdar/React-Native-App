import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { images } from '../assets/images/image';
import { commonStyles } from '../assets/style/style';
import Button from './Button';
import { colors } from '../assets/typography';

interface PropsType {
  midText?: string;
  buttonTitle?: string;
  onPress?: () => void;
}

const ThreePartButton = ({ midText, buttonTitle, onPress }: PropsType) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        style={[
          styles.button,
          {
            width: '33.33%',
            justifyContent: 'center',
            alignItems: 'flex-start',
          },
        ]}
        onPress={() => navigation.goBack()}
      >
        <Image style={styles.image} source={images.backIcon} />
      </TouchableOpacity>
      <Text
        style={[
          commonStyles.whiteText,
          commonStyles.largeText,
          {
            justifyContent: 'center',
            alignItems:'center',
            width: buttonTitle ? '33.33%' : '70%',
            flexWrap: 'nowrap',
          },
        ]}
      >
        {midText}
      </Text>
      <View
        style={[
          styles.button2,
          { justifyContent: 'center', alignItems: 'flex-end', width: '33.33%' },
        ]}
      >
        <Button
          title={buttonTitle}
          textColor={colors.normalText}
          buttonColor="#1A1B22"
          onPress={onPress}
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
  image: {
    height: 40,
    width: 40,
  },
  button2: {
    height: 40,
    width: 100,
  },
});

export default ThreePartButton;
