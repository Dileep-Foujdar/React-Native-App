import {
  Alert,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { commonStyles } from '../../assets/style/style';
import GoBack from '../../components/GoBack';
import InputText from '../../components/InputText';
import { images } from '../../assets/images/image';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/RootNavigator';


type PropsType = NativeStackNavigationProp<RootStackParamList,"signInWithEmail">;


const SignInWithEmailScreen = () => {
  const navigation = useNavigation<PropsType>();
  const [email, setisEmail] = useState('');
  const [Pass, setisPass] = useState('');
  const handleSignin = () => {
    console.log('Email:', email);
    console.log('Password:', Pass);

    if (!email.trim()) {
      Alert.alert('Please enter your email');
      return;
    }

    if (!Pass.trim()) {
      Alert.alert('Please enter your password');
      return;
    }

  };
  return (
    <View style={commonStyles.container1}>
      <View
        style={{
          height: 80,
          justifyContent: 'center',
          borderBottomWidth: 1.5,
          borderBottomColor: '#2A2B32',
        }}
      >
        <GoBack />
      </View>
      <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 24,
            marginBottom: 10,
            color: 'white',
            fontFamily: 'bordan',
          }}
        >
          Hello Sweet Stuff
        </Text>
        <InputText
          placeholder="Email address"
          icon={images.mailIcon}
          value={email}
          onChangeText={value => setisEmail(value)}
        />
        <PasswordInput
          placeholder="Password"
          lockIcon={images.showPassIcon}
          icon={images.passIcon}
          value={Pass}
          onChangeText={value => setisPass(value)}
        />
        <TouchableOpacity onPress={()=>navigation.navigate("forgate")}>
          <Text
            style={[
              commonStyles.whiteText,
              { textAlign: 'left', fontSize: 16, marginTop: 10 },
            ]}
          >
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          position: 'absolute',
          bottom: 25,
          width: '100%',
        }}
      >
        <Button
          title="Sign in"
          onPress={handleSignin}
          buttonColor="#EBFF00"
          textColor="Black"
          style={styles.Btn}
        />
      </View>
    </View>
  );
};

export default SignInWithEmailScreen;

const styles = StyleSheet.create({
  Btn:{
    borderRadius:50
  }
});
