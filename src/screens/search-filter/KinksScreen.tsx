import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { commonStyles } from '../../assets/style/style';
import Button from '../../components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import ThreePartButton from '../../components/ThreePartButton';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/sotre';

import { toggleKink, clearKinks } from '../../redux/slices/kinkSlice';

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

const KinksScreen = () => {
  const navigation = useNavigation<PropsType>();

  const dispatch = useDispatch();

  // Redux se selected array
  const selectedPreferences = useSelector(
    (state: RootState) => state.kinks.selectedKinks,
  );

  const handlePreference = (name: string) => {
    dispatch(toggleKink(name));
  };

  const handleButton = () => {
    if (selectedPreferences.length === 0) {
      Alert.alert('Please select at least one preference');
      return;
    }

    navigation.goBack();
  };
  return (
    <View style={commonStyles.container1}>
      <View style={commonStyles.Goback}>
        <ThreePartButton
          midText="Kinks"
          buttonTitle="clear"
          onPress={() => dispatch(clearKinks(''))}
        />
      </View>
      <View style={{ gap: 10, height: '75%', marginVertical: 20,marginHorizontal:15 }}>
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
                backgroundColor: selectedPreferences.includes(item.name)
                  ? '#EBFF00'
                  : '#262A34',
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 20,
              }}
            >
              <Text
                style={[
                  commonStyles.smallText,
                  commonStyles.whiteText,
                  {
                    color: selectedPreferences.includes(item.name)
                      ? 'black'
                      : 'white',
                  },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.button}>
        <View style={{ paddingHorizontal: 20 }}>
          <View style={{ opacity: selectedPreferences.length > 0 ? 1 : 0.8 }}>
            <Button
              title="Apply"
              buttonColor="#EBFF00"
              textColor="black"
              isDisabled={selectedPreferences.length === 0}
              onPress={handleButton}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default KinksScreen;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    gap: 10,
    bottom: 25,
    width: '100%',
  },
});
