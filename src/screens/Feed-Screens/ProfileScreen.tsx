import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { commonStyles } from '../../assets/style/style';
import ProfileHeader from '../../components/ProfileHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/sotre';
import Button from '../../components/Button';
import { colors } from '../../assets/typography';
import ProfileTopNavigator from '../../navigations/ProfileTopNavigation';

const followers = [
  { id: 1, count: '250', name: 'Friends' },
  { id: 2, count: '12.5k', name: 'Winks' },
  { id: 3, count: '230', name: 'Posts' },
];

const ProfileScreen = () => {
  const imgUri = useSelector((state: RootState) => state.proimg.imageUri);
  const name = useSelector((state: RootState) => state.username.userName);
  return (
    <View style={commonStyles.container1}>
      <View>
        <ProfileHeader />
      </View>
      <ScrollView style={{flex:1}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
            paddingVertical: 40,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              height: 120,
              width: 120,
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {imgUri && (
              <Image
                style={{ height: 120, width: 120, borderRadius: 100 }}
                source={{ uri: imgUri }}
              />
            )}
          </View>
          <Text
            style={[
              commonStyles.whiteText,
              commonStyles.largeText,
              { fontSize: 24 },
            ]}
          >
            {name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '65%',
            }}
          >
            {followers.map((item, id) => {
              return (
                <View style={{ alignItems: 'center' }}>
                  <Text
                    style={[commonStyles.whiteText, commonStyles.largeText]}
                  >
                    {item.count}
                  </Text>
                  <Text
                    style={[commonStyles.whiteText, commonStyles.smallText]}
                  >
                    {item.name}
                  </Text>
                </View>
              );
            })}
          </View>
          <View style={{ width: '100%' }}>
            <Button
              title="Edit profile"
              onPress={() => {}}
              buttonColor={colors.primary}
              textColor="black"
              style={{ width: '100%' }}
            />
          </View>
        </View>
        <View style={styles.topNavigator}>
          <ProfileTopNavigator />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  topNavigator: {
    height:500
  },
});