import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { commonStyles } from '../../assets/style/style';
import { images } from '../../assets/images/image';
import { colors } from '../../assets/typography';
import Button from '../../components/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/sotre';

const ProfileTabScreen = () => {
  const aboutUs = useSelector((state: RootState) => state.aboutus.aboutUs);
  const gender = useSelector((state: RootState) => state.singlegender.gender);
  return (
    <View style={[commonStyles.container1]}>
      <View
        style={{
          margin: 20,
          padding: 20,
          borderRadius: 12,
          backgroundColor: colors.secondary,
          gap: 10,
        }}
      >
        <View
          style={{
            gap: 5,
            flexDirection: 'row',
          }}
        >
          <Image source={images.userbadge} />
          <View>
            <Text
              style={[
                commonStyles.largeText,
                commonStyles.whiteText,
                { textAlign: 'left', padding: 5 },
              ]}
            >
              Verified user
            </Text>
            <Text
              style={[
                commonStyles.smallText,
                commonStyles.whiteText,
                { textAlign: 'left', width: '45%' },
              ]}
            >
              This user has been verified by Pineapple and members of our
              community
            </Text>
          </View>
        </View>
        {/* <Button
          title="Verify user"
          buttonColor={colors.background}
          onPress={() => {}}
        /> */}
      </View>
      <View style={{ padding: 20 }}>
        <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
          About me
        </Text>
        <Text
          style={[
            commonStyles.smallText,
            commonStyles.whiteText,
            { textAlign: 'left', paddingTop: 8 },
          ]}
        >
          {aboutUs}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          paddingHorizontal: 20,
          paddingVertical: 5,
        }}
      >
        <Text
          style={[
            commonStyles.whiteText,
            commonStyles.smallText,
            { backgroundColor: colors.secondary, padding: 15 ,borderRadius:50},
          ]}
        >
          London, UK
        </Text>
        <Text
          style={[
            commonStyles.whiteText,
            commonStyles.smallText,
            { backgroundColor: colors.secondary, padding: 15,borderRadius:50 },
          ]}
        >
          {gender === 'Man' ? 'He/Him' : 'She/Her'}
        </Text>
      </View>
    </View>
  );
};

export default ProfileTabScreen;

const styles = StyleSheet.create({});
