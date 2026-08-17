import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { images } from '../assets/images/image';
import { colors } from '../assets/typography';

interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonColor?: string;
  textColor?: string;
  style?: object;
  rightStyle?: object;
  icon?: ImageSourcePropType | string;
  rightIcon?: ImageSourcePropType | string;
  isDisabled?: boolean;
}

const FilterButton = ({
  title,
  onPress,
  buttonColor = colors.buttonColor,
  textColor = '#FFFFFF',
  style,
  icon,
  rightIcon = images.leftIcon,
  rightStyle,
  isDisabled,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: buttonColor,
        },
        style,
      ]}
    >
      <View style={{ flexDirection: 'row', gap: 10 }}>
        {icon && (
          <Image
            source={
              typeof icon === 'string'
                ? { uri: icon } // remote URL
                : icon // local image
            }
          />
        )}
        <Text
          style={[
            styles.text,
            {
              color: textColor,
            },
          ]}
        >
          {title}
        </Text>
      </View>
      {rightIcon && (
        <Image
          source={
            typeof rightIcon === 'string'
              ? { uri: rightIcon } // remote URL
              : rightIcon // local image
          }
          style={rightStyle}
        />
      )}
    </TouchableOpacity>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 8,
  },

  text: {
    fontSize: 20,
    fontFamily: 'bordan',
  },
});
