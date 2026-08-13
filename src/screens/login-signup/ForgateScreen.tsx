import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import GoBack from '../../components/GoBack';
import { commonStyles } from '../../assets/style/style';
import InputText from '../../components/InputText';
import { images } from '../../assets/images/image';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/RootNavigator';

type PropsType = NativeStackNavigationProp<RootStackParamList, 'forgate'>;

const ForgateScreen = () => {
  const navigation = useNavigation<PropsType>();
  const [email, setEmail] = useState('');
  const handleBtn = () => {
    if (!email) {
      Alert.alert('Enter Your email');
    } else {
      navigation.navigate('forgateinst', { email: email });
    }
  };
  return (
    <View style={commonStyles.container1}>
      <View style={commonStyles.Goback}>
        <GoBack />
      </View>
      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
        <Text
          style={[
            commonStyles.whiteText,
            { fontSize: 24, textAlign: 'left', marginBottom: 10 },
          ]}
        >
          Forgate Password
        </Text>
        <InputText
          placeholder="Email Address"
          icon={images.mailIcon}
          value={email}
          onChangeText={value => setEmail(value)}
        />
      </View>
      <View style={commonStyles.bottomButton}>
        <Button
          buttonColor="#EBFF00"
          textColor="black"
          title="Reset password"
          onPress={handleBtn}
        />
      </View>
    </View>
  );
};

export default ForgateScreen;

const styles = StyleSheet.create({});
