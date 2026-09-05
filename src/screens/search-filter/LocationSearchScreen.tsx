import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { commonStyles } from '../../assets/style/style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import { colors } from '../../assets/typography';
import { images } from '../../assets/images/image';

type PropsType = NativeStackNavigationProp<RootStackParamList, 'filter'>;

const LocationSearchScreen = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation<PropsType>();
  return (
    <View style={commonStyles.container1}>
      <View style={{ flexDirection: 'row', padding: 20 }}>
        <View style={styles.container}>
          <Image source={images.SearchIcon} />
          <TextInput placeholder="Enter Your city" style={styles.input} />
        </View>
        <Button
          title="cancel"
          style={{ width: '30%' }}
          buttonColor={colors.background}
          textColor={colors.normalText}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default LocationSearchScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#262A34',
    width: '70%',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 5,
    gap: 4,
    borderWidth: 1,
  },
  input: {
    borderRadius: 14,
    fontSize: 16,
    width: '100%',
    color: 'white',
    fontFamily: 'bordan',
  },
});
