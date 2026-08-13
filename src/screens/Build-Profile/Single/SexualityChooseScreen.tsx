import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { commonStyles } from '../../../assets/style/style';
import { images } from '../../../assets/images/image';
import Button from '../../../components/Button';
import ProcessLine from '../../../components/ProcessLine';
import GoBack from '../../../components/GoBack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigations/RootNavigator';

type PropsType = NativeStackNavigationProp<RootStackParamList,'interest'>

const sexualityOptions = [
  { id: '1', name: 'Heterosexual' },
  { id: '2', name: 'Gay' },
  { id: '3', name: 'Lesbian' },
  { id: '4', name: 'Bisexual' },
  { id: '5', name: 'Pansexual' },
  { id: '6', name: 'Asexual' },
  { id: '7', name: 'Demisexual' },
  { id: '8', name: 'Queer' },
  { id: '9', name: 'Questioning' },
  { id: '10', name: 'Prefer not to say' },
];

const SexualityChooseScreen = () => {
    const navigation = useNavigation<PropsType>();
  const [selectSaxuality, setSelectSaxuality] = useState('');
  return (
    <View style={{ flex: 1 }}>
      <View style={commonStyles.container1}>
        <ProcessLine width={'60%'} />
        <View style={commonStyles.Goback}>
          <GoBack />
        </View>
        <View style={{ paddingHorizontal: 25, paddingTop:10, gap: 10 }}>
          <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
            How would you describe your sexuality?
          </Text>
          <Text
            style={[
              commonStyles.smallText,
              commonStyles.whiteText,
              { textAlign: 'left', paddingBottom: 10 },
            ]}
          >
            You can change this later.
          </Text>
        </View>
        <View style={{ flex: 6, paddingHorizontal: 20 }}>
          <FlatList
            data={sexualityOptions}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectSaxuality(item.name);
                }}
                style={{
                  padding: 16,
                  borderRadius: 12,
                  marginTop: 8,
                  backgroundColor:
                    selectSaxuality === item.name ? '#EBFF00' : '#262A34',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={[
                    commonStyles.whiteText,
                    commonStyles.smallText,
                    {
                      textAlign: 'left',
                      color: selectSaxuality === item.name ? 'black' : 'white',
                    },
                  ]}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:
                      selectSaxuality === item.name ? 'black' : 'white',
                    height: 26,
                    width: 26,
                    borderRadius: 4,
                  }}
                >
                  {selectSaxuality === item.name && (
                    <Image source={images.closeBlackIcon} />
                  )}
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={{ backgroundColor: '#1A1B22', width: '100%', height: '20%' }}
        >
          <View style={commonStyles.bottomButton}>
            <Button
              onPress={() => {}}
              buttonColor="#262A34"
              rightIcon={selectSaxuality ? images.switchOn : images.switchOff}
              style={{
                borderRadius: 14,
                marginBottom: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              title="Show on my Profile"
            />
            <View style={{opacity: selectSaxuality ? 1:0.4}}>
            <Button
              title="Continue"
              onPress={() => navigation.navigate('interest')}
              isDisabled={!selectSaxuality}
              buttonColor="#EBFF00"
              textColor="black"
            />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SexualityChooseScreen;

const styles = StyleSheet.create({});
