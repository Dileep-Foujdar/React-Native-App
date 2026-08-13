import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import GoBack from '../../components/GoBack';
import { commonStyles } from '../../assets/style/style';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/RootNavigator';

type PropsType = NativeStackNavigationProp<RootStackParamList, 'verification'>;

const EmailVerificationScreen = () => {
  const navigation = useNavigation<PropsType>();
  const [email, setEmail] = useState('');
  const handleBtn = () => {
    if (!email) {
      Alert.alert('Enter Your email');
    } else {
      navigation.navigate('checkInbox', { email: email });
    }
  };
  return (
    <View style={commonStyles.container1}>
      <View style={commonStyles.Goback}>
        <GoBack />
      </View>
      <View style={{ marginTop: 40, paddingHorizontal: 20, gap: 10 }}>
        <Text
          style={[
            commonStyles.whiteText,
            { fontSize: 24, textAlign: 'left' },
          ]}
        >
          Please verify your email address
        </Text>
        <Text
          style={[
            commonStyles.whiteText,
            {
              textAlign: 'left',
              color: '#A5A7AF',
              lineHeight: 17,
              fontSize: 18,
            },
          ]}
        >
          We protect our community by making sure everyone on Pineapple is real.
        </Text>
        <InputText
          placeholder="Please enter your email"
          value={email}
          onChangeText={value => setEmail(value)}
        />
      </View>
      <View style={commonStyles.bottomButton}>
        <Button
          buttonColor="#EBFF00"
          textColor="black"
          title="Continue"
          onPress={handleBtn}
        />
      </View>
    </View>
  );
};

export default EmailVerificationScreen;

const styles = StyleSheet.create({});
