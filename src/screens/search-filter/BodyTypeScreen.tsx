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
import { togleBody } from '../../redux/slices/bodySlice';

type PropsType = NativeStackNavigationProp<
  RootStackParamList,
  'interest'
>;

const bodyTypeOptions = [
  { id: '1', name: 'Slim' },
  { id: '2', name: 'Athletic' },
  { id: '3', name: 'Average' },
  { id: '4', name: 'Fit' },
  { id: '5', name: 'Muscular' },
  { id: '6', name: 'Curvy' },
  { id: '7', name: 'Petite' },
  { id: '8', name: 'Plus Size' },
  { id: '9', name: 'Lean' },
  { id: '10', name: 'Stocky' },
];

const BodyTypeScreen = () => {
  const dispatch = useDispatch();

  const selectedBody = useSelector(
    (state: RootState) => state.body.selectedBody,
  );

  const navigation = useNavigation<PropsType>();

  return (
    <View style={{ flex: 1 }}>
      <View style={commonStyles.container1}>

        <View style={commonStyles.Goback}>
          <ThreePartButton midText="Body types" />
        </View>

        <View style={{ flex: 6, paddingHorizontal: 20 }}>
          <FlatList
            data={bodyTypeOptions}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              const isSelected = selectedBody.includes(item.name);

              return (
                <TouchableOpacity
                  onPress={() => {
                    dispatch(togleBody(item.name));
                  }}
                  style={{
                    padding: 16,
                    borderRadius: 12,
                    marginTop: 8,
                    backgroundColor: isSelected
                      ? '#EBFF00'
                      : '#262A34',
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
                      backgroundColor: isSelected
                        ? 'black'
                        : 'white',
                      height: 26,
                      width: 26,
                      borderRadius: 4,
                    }}
                  >
                    {isSelected && (
                      <Image source={images.closeBlackIcon} />
                    )}
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
                opacity: selectedBody.length > 0 ? 1 : 0.4,
              }}
            >
              <Button
                title="Apply"
                onPress={() => navigation.navigate('filter')}
                isDisabled={selectedBody.length === 0}
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

export default BodyTypeScreen;

const styles = StyleSheet.create({});