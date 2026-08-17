import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { images } from '../assets/images/image';
import { commonStyles } from '../assets/style/style';

const CommentButton = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: 20,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Image style={styles.image} source={images.backIcon} />
      </TouchableOpacity>
      <View style={{paddingLeft:'25%'}}>
        <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
          Comments
        </Text>
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
});

export default CommentButton;
