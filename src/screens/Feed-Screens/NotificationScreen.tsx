import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { commonStyles } from '../../assets/style/style';
import { images } from '../../assets/images/image';
import { colors } from '../../assets/typography';
import GoBack from '../../components/GoBack';

const NotificationScreen = () => {
  return (
    <View style={[commonStyles.container1]}>
      <View style={commonStyles.Goback}>
        <GoBack />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 6,
          gap: 15,
        }}
      >
        <View
          style={{
            backgroundColor: colors.primary,
            height: 100,
            width: 100,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={images.notificationIcon} />
        </View>
        <Text
          style={[
            commonStyles.whiteText,
            commonStyles.largeText,
            { textAlign: 'center' },
          ]}
        >
          Nothing to see yet
        </Text>
        <Text
          style={[
            commonStyles.whiteText,
            commonStyles.smallText,
            { textAlign: 'center' },
          ]}
        >
          Your notifications will show here.
        </Text>
      </View>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
