import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { commonStyles } from '../../assets/style/style';
import { images } from '../../assets/images/image';
import Button from '../../components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigations/RootNavigator';
import ThreePartButton from '../../components/ThreePartButton';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/sotre';
import { togleSmooking } from '../../redux/slices/smookingSlice';

type PropsType = NativeStackNavigationProp<RootStackParamList, 'interest'>;

const bodyTypeOptions = [
  { id: '1', name: 'Regularly' },
  { id: '2', name: 'Socially' },
  { id: '3', name: 'Never' },
];

const SmookingScreen = () => {
  const dispatch = useDispatch();

  const selectedSmooking = useSelector(
    (state: RootState) => state.smooking.selectedSmooking,
  );

  const navigation = useNavigation<PropsType>();

  return (
    <View style={{ flex: 1 }}>
      <View style={commonStyles.container1}>
        <View style={commonStyles.Goback}>
          <ThreePartButton midText="Smooking" />
        </View>

        <View style={{ flex: 6, paddingHorizontal: 20 }}>
          <FlatList
            data={bodyTypeOptions}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              const isSelected = selectedSmooking.includes(item.name);

              return (
                <TouchableOpacity
                  onPress={() => {
                    dispatch(togleSmooking(item.name));
                  }}
                  style={{
                    padding: 16,
                    borderRadius: 12,
                    marginTop: 8,
                    backgroundColor: isSelected ? '#EBFF00' : '#262A34',
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
                        color: isSelected ? 'black' : 'white',
                      },
                    ]}
                  >
                    {item.name}
                  </Text>

                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: isSelected ? 'black' : 'white',
                      height: 26,
                      width: 26,
                      borderRadius: 4,
                    }}
                  >
                    {isSelected && <Image source={images.closeBlackIcon} />}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: '#1A1B22',
            width: '100%',
            height: '12%',
          }}
        >
          <View style={commonStyles.bottomButton}>
            <View
              style={{
                opacity: selectedSmooking.length > 0 ? 1 : 0.4,
              }}
            >
              <Button
                title="Apply"
                onPress={() => navigation.goBack()}
                isDisabled={selectedSmooking.length === 0}
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

export default SmookingScreen;

const styles = StyleSheet.create({});
