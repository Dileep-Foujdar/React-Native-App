import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { commonStyles } from '../../assets/style/style';
import { images } from '../../assets/images/image';

const FriendsScreen = () => {
  return (
    <View style={[commonStyles.container,{gap:20}]}>
      <Image source={images.activeWinks} />
      <Text
        style={[
          commonStyles.whiteText,
          commonStyles.largeText,
          { textAlign: 'center' },
        ]}
      >
        Hey sweet stuff, looks like you need to get your wink on!
      </Text>
      <Text
        style={[
          commonStyles.whiteText,
          commonStyles.smallText,
          { textAlign: 'center' },
        ]}
      >
        As soon as someone winks back at you, you will see them here. Keep
        winking at more humans, a connection could be just around the corner.
      </Text>
    </View>
  );
};

export default FriendsScreen;

const styles = StyleSheet.create({});
