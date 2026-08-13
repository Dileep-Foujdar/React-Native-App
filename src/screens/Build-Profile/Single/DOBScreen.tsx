import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import GoBack from '../../../components/GoBack';
import { commonStyles } from '../../../assets/style/style';
import ProcessLine from '../../../components/ProcessLine';
import Button from '../../../components/Button';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigations/RootNavigator';
import { useNavigation } from '@react-navigation/native';

type PropsType = NativeStackNavigationProp<RootStackParamList, 'singledob'>;

const DOBScreen = () => {
  const navigation = useNavigation<PropsType>();
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');
  const handleClick = () => {
  if (!month || !day || !year) {
    Alert.alert('Please enter your complete birth date.');
    return;
  }

  const m = Number(month);
  const d = Number(day);
  const y = Number(year);

  if (m < 1 || m > 12) {
    Alert.alert('Month must be between 1 and 12.');
    return;
  }

  if (d < 1 || d > 31) {
    Alert.alert('Day must be between 1 and 31.');
    return;
  }

  if (y < 1900 || y > new Date().getFullYear()) {
    Alert.alert('Please enter a valid year.');
    return;
  }

  navigation.navigate('about');
};
  return (
    <View style={commonStyles.container1}>
      <ProcessLine width={'24%'} />

      <View style={commonStyles.Goback}>
        <GoBack />
      </View>
      <View style={{ paddingHorizontal: 25, paddingTop: 25, gap: 10 }}>
        <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
          What is your date of birth?
        </Text>

        <Text style={[commonStyles.whiteText, commonStyles.smallText]}>
          We need this to represent your age accurately. Your date of birth will
          not be visible.
        </Text>

        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <TextInput
            placeholder="DD"
            style={styles.DBbox}
            value={day}
            onChangeText={setDay}
            keyboardType="number-pad"
            maxLength={2}
          />
          <TextInput
            placeholder="MM"
            style={styles.DBbox}
            value={month}
            onChangeText={setMonth}
            keyboardType="number-pad"
            maxLength={2}
          />
          <TextInput
            placeholder="YYY"
            style={styles.DBbox}
            value={year}
            onChangeText={setYear}
            keyboardType="number-pad"
            maxLength={4}
          />
        </View>
      </View>

      <View style={styles.button}>
        <Button
          title="Continue"
          buttonColor="#EBFF00"
          textColor="black"
          onPress={handleClick}
        />
      </View>
    </View>
  );
};

export default DOBScreen;

const styles = StyleSheet.create({
  DBbox: {
    backgroundColor: '#262A34',
    padding: 20,
    borderRadius: 12,
    color:'white',
    fontWeight:'600'
  },
  button: {
    position: 'absolute',
    bottom: 25,
    paddingHorizontal: 25,
    width: '100%',

  },
});
