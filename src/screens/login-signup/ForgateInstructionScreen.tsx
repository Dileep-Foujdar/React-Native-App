import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigations/RootNavigator';
import { commonStyles } from '../../assets/style/style';
import GoBack from '../../components/GoBack';
import { images } from '../../assets/images/image';
import Button from '../../components/Button';
import MailModel from '../../components/MailModel';

type PropsType = RouteProp<RootStackParamList, 'forgateinst'>;

const ForgateInstructionScreen = () => {
  const route = useRoute<PropsType>();
  const { email } = route.params;
  const [visible,setVisible] = useState(false);
  return (
    <View style={commonStyles.container1}>
      <View style={commonStyles.Goback}>
        <GoBack />
      </View>
      <View style={[styles.BottomView,{paddingTop:visible?80:120}]}>
        <View style={styles.yelloBtn}>
          <Image source={images.blackEmailIcon} />
        </View>
        <Text style={[commonStyles.whiteText,styles.heading]}>Instructions sent</Text>
        <Text style={[commonStyles.whiteText,styles.subHeading]}>
          We sent instructions to change your password to <Text style={{color:'#EBFF00'}}>{email}</Text>{' '}
          please check both your inbox and spam folder.
        </Text>
        <Button title='Open email app' buttonColor='#262A34'style={{width:'100%',borderRadius:100}} onPress={()=>setVisible(true)} />
          <TouchableOpacity>
            <Text style={[commonStyles.whiteText,styles.textBtn]}>Resend email</Text>
          </TouchableOpacity>
      </View>
      <View>
        <MailModel visible={visible} onClose={()=>{setVisible(false)}} />
      </View>
    </View>
  );
};

export default ForgateInstructionScreen;

const styles = StyleSheet.create({
  yelloBtn: {
    backgroundColor: '#EBFF00',
    height: 110,
    width: 110,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:25,
    gap:15
  },
  subHeading:{
    color:'#A5A7AF',
    fontSize:16,
  },
  heading:{
    fontSize:24,
    fontWeight:'600'
  },
  textBtn:{
    fontSize:20,
  }
});
