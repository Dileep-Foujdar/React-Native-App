import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { commonStyles } from '../../../assets/style/style';
import ProcessLine from '../../../components/ProcessLine';
import Button from '../../../components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigations/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../../assets/images/image';
import GenderModal from '../../../components/GenderModal';
import GoBackOtherButton from '../../../components/GoBackOtherButton';

type PropsType = NativeStackNavigationProp<RootStackParamList, 'profilephoto'>;

const preferenceOptions = [
  { id: '1', name: 'Adult Parties' },
  { id: '2', name: 'Anal' },
  { id: '3', name: 'Blindfolds' },
  { id: '4', name: 'Cross-dressing' },
  { id: '5', name: 'Cuckolding' },
  { id: '6', name: 'Cybersex' },
  { id: '7', name: 'Dogging' },
  { id: '8', name: 'DP' },
  { id: '9', name: 'Fisting' },
  { id: '10', name: 'Gangbangs' },
  { id: '11', name: 'Group Sex' },
  { id: '12', name: 'Making Videos' },
  { id: '13', name: 'Oral' },
  { id: '14', name: 'Phone Sex' },
  { id: '15', name: 'Rimming' },
  { id: '16', name: 'Role Play' },
  { id: '17', name: 'Safe Sex' },
  { id: '18', name: 'Same Room Swapping' },
  { id: '19', name: 'Separate Room Swapping' },
  { id: '20', name: 'SM' },
  { id: '21', name: 'Soft Swing' },
  { id: '22', name: 'Spanking' },
  { id: '23', name: 'Swingers Clubs' },
  { id: '24', name: 'Taking Photos' },
  { id: '25', name: 'Threesomes' },
  { id: '26', name: 'Toys' },
  { id: '27', name: 'Voyeurism' },
  { id: '28', name: 'Watersports' },
  { id: '29', name: 'Webcams' },
];

const SelectLookingScreen = () => {
  const navigation = useNavigation<PropsType>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [showOnProfile, setShowOnProfile] = useState(true);
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);

  const handlePreference = (name: string) => {
  setSelectedPreferences(prev => {
    if (prev.includes(name)) {
      // already selected → remove
      return prev.filter(item => item !== name);
    }

    // not selected → add
    return [...prev, name];
  });
};

  const handleButton = () => {
    if (selectedPreferences.length===0) {
      Alert.alert('Please select at least one preference');
    } else {
      navigation.navigate('profilephoto');
    }
  };
  return (
    <View style={commonStyles.container1}>
      <ProcessLine width={'84%'} />
      <View style={commonStyles.Goback}>
        <GoBackOtherButton onPress={() => navigation.navigate('profilephoto')} />
      </View>
      <View style={{ paddingHorizontal: 25, paddingTop: 20, gap: 10 }}>
        <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
          What are you looking for?
        </Text>
        <Text style={[commonStyles.whiteText, commonStyles.smallText,{paddingBottom:10}]}>
          Select your desires to connect with like-minded people, the ones
          that'll really get you. Don't sweat – you can edit these at any time.
        </Text>
      </View>
      <View style={{ gap: 10, height:'50%' }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 10,
            paddingBottom: 20,
          }}
        >
          {preferenceOptions.map(item => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.7}
              onPress={() => {
                handlePreference(item.name);
              }}
              style={{
                backgroundColor:
                  selectedPreferences.includes(item.name) ? '#EBFF00' : '#262A34',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 20,
              }}
            >
              <Text
                style={[
                  commonStyles.smallText,
                  commonStyles.whiteText,
                  { color: selectedPreferences.includes(item.name) ? 'black' : 'white' },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.button}>
        <View
          style={{ height: 1, width: '100%', backgroundColor: '#262A34' }}
        />
        <View style={{ paddingHorizontal: 25 }}>
          <Button
            onPress={() => setShowOnProfile(prev => !prev)}
            buttonColor="#262A34"
            rightIcon={showOnProfile ? images.switchOn : images.switchOff}
            style={{
              borderRadius: 14,
              marginBottom: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            title="Show on my Profile"
          />
          <View style={{ opacity: selectedPreferences.length>0 ? 1 : 0.8 }}>
            <Button
              title="Continue"
              buttonColor="#EBFF00"
              textColor="black"
              isDisabled={selectedPreferences.length===0}
              onPress={handleButton}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectLookingScreen;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    gap: 10,
    bottom: 25,
    width: '100%',
  },
});
