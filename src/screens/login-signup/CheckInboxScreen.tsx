import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigations/RootNavigator';
import { commonStyles } from '../../assets/style/style';
import GoBack from '../../components/GoBack';
import { images } from '../../assets/images/image';
import Button from '../../components/Button';
import MailModel from '../../components/MailModel';

type PropsType = RouteProp<RootStackParamList, 'checkInbox'>;

const CheckInboxScreen = () => {
  const route = useRoute<PropsType>();
  const { email } = route.params;
  const [visible, setVisible] = useState(false);
  return (
    <View style={commonStyles.container1}>
      <View style={commonStyles.Goback}>
        <GoBack />
      </View>
      <View style={[styles.BottomView, { paddingTop: visible ? 80 : 120 }]}>
        <View style={styles.yelloBtn}>
          <Image source={images.blackEmailIcon} />
        </View>
        <Text style={[commonStyles.whiteText, styles.heading]}>
          Check your inbox
        </Text>
        <Text style={[commonStyles.whiteText, styles.subHeading]}>
          A confirmation email has been sent to{' '}
          <Text style={{ color: '#EBFF00' }}>{email}</Text> Check your email and
          tap the link we sent you.
        </Text>
        <Button
          title="Open email app"
          buttonColor="#EBFF00"
          textColor='#000'
          style={{ width: '100%', borderRadius: 100 }}
          onPress={() => setVisible(true)}
        />
        <TouchableOpacity>
          <Text style={[commonStyles.whiteText, styles.textBtn]}>
            I didn’t get it
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <MailModel
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />
      </View>
    </View>
  );
};

export default CheckInboxScreen;

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
    paddingHorizontal: 25,
    gap: 15,
  },
  subHeading: {
    color: '#A5A7AF',
    fontSize: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
  },
  textBtn: {
    fontSize: 20,
  },
});
