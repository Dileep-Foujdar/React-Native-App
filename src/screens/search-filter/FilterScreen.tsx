import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { commonStyles } from '../../assets/style/style';
import ThreePartButton from '../../components/ThreePartButton';
import FilterButton from '../../components/FilterButton';
import { images } from '../../assets/images/image';
import Button from '../../components/Button';
import { colors } from '../../assets/typography';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/RootNavigator';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/sotre';
import { clearSelectedGender } from '../../redux/slices/genderSlice';
import { clearKinks } from '../../redux/slices/kinkSlice';
import { clearBody } from '../../redux/slices/bodySlice';
import { clearSelectDrink } from '../../redux/slices/drinkingSlice';
import { clearSelectPeircing } from '../../redux/slices/piercingSlice';
import { clearReligion } from '../../redux/slices/religionSlice';
import { clearOption } from '../../redux/slices/saxualitySlice';
import { clearSmooking } from '../../redux/slices/smookingSlice';
import { clearSelectTattoos } from '../../redux/slices/tattooseSlice';

type PropsType = NativeStackNavigationProp<
  RootStackParamList,
  'filterinterested'
>;

const FilterScreen = () => {
  const selectgender = useSelector(
    (state: RootState) => state.gender.selectedGender,
  );
  const selectdrink = useSelector(
    (state: RootState) => state.drink.selectDrink,
  );
  const selectpeircing = useSelector(
    (state: RootState) => state.peircing.selectpiercing,
  );
  const selecttattoos = useSelector(
    (state: RootState) => state.tattoos.selecttattoos,
  );
  const kinks = useSelector((state: RootState) => state.kinks.selectedKinks);
  const body = useSelector((state: RootState) => state.body.selectedBody);
  const religion = useSelector(
    (state: RootState) => state.religion.selectedReligion,
  );
  const option = useSelector((state: RootState) => state.option.selectedOption);
  const smooking = useSelector(
    (state: RootState) => state.smooking.selectedSmooking,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation<PropsType>();
  return (
    <View style={commonStyles.container1}>
      <View style={commonStyles.Goback}>
        <ThreePartButton
          buttonTitle="clear"
          midText="Preferenes"
          onPress={() => {}}
        />
      </View>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View style={{ gap: 5, paddingVertical: 5 }}>
          <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
            Age
          </Text>
          <FilterButton
            title="Age"
            style={{ justifyContent: 'space-between', borderRadius: 14 }}
            onPress={() => navigation.navigate('age')}
          />
        </View>
        <View style={{ gap: 5, paddingVertical: 5 }}>
          <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
            I’m Interested in
          </Text>
          <View>
            <FilterButton
              title="I'm Interested in"
              style={{ justifyContent: 'space-between', borderRadius: 14 }}
              onPress={() => navigation.navigate('filterinterested')}
            />
            {selectgender && (
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-start',
                  backgroundColor: '#EBFF00',
                  borderRadius: 50,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  alignItems: 'center',
                  gap: 15,
                  marginTop: 5,
                }}
              >
                <Text
                  style={[
                    commonStyles.smallText,
                    {
                      color: 'black',
                      fontFamily: 'bordan',
                    },
                  ]}
                >
                  {selectgender}
                </Text>

                <TouchableOpacity
                  onPress={() => dispatch(clearSelectedGender())}
                >
                  <Image source={images.closeIcon} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={{ gap: 5, paddingVertical: 5 }}>
          <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
            Kinks
          </Text>
          <View>
            <FilterButton
              title="Kinks"
              style={{ justifyContent: 'space-between', borderRadius: 14 }}
              onPress={() => navigation.navigate('kinks')}
            />
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 5,
                gap: 5,
              }}
            >
              {kinks.map((item, index) => (
                <View
                  key={`${item}-${index}`}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#EBFF00',
                    borderRadius: 50,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    gap: 15,
                  }}
                >
                  <Text
                    style={[
                      commonStyles.smallText,
                      {
                        color: 'black',
                        fontFamily: 'bordan',
                      },
                    ]}
                  >
                    {item}
                  </Text>

                  <TouchableOpacity onPress={() => dispatch(clearKinks(item))}>
                    <Image source={images.closeIcon} />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={{ gap: 15 }}>
          <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
            Advanced filters
          </Text>
          <View>
            <FilterButton
              title="Body type"
              style={{ justifyContent: 'space-between', borderRadius: 14 }}
              onPress={() => navigation.navigate('bodytype')}
              icon={images.bodyIcon}
            />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginTop: 5,
                  gap: 5,
                }}
              >
                {body.map((item, index) => (
                  <View
                    key={`${item}-${index}`}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#EBFF00',
                      borderRadius: 50,
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      gap: 15,
                    }}
                  >
                    <Text
                      style={[
                        commonStyles.smallText,
                        {
                          color: 'black',
                          fontFamily: 'bordan',
                        },
                      ]}
                    >
                      {item}
                    </Text>
                    <TouchableOpacity onPress={() => dispatch(clearBody(item))}>
                      <Image source={images.closeIcon} />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <FilterButton
            title="Distance"
            style={{ justifyContent: 'space-between', borderRadius: 14 }}
            onPress={() => navigation.navigate('distance')}
            icon={images.locationIcon}
          />
          <View>
            <FilterButton
              title="Drinking"
              style={{ justifyContent: 'space-between', borderRadius: 14 }}
              onPress={() => navigation.navigate('drinking')}
              icon={images.drinkingIcon}
            />
            {selectdrink && (
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-start',
                  backgroundColor: '#EBFF00',
                  borderRadius: 50,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  alignItems: 'center',
                  gap: 15,
                  marginTop: 5,
                }}
              >
                <Text
                  style={[
                    commonStyles.smallText,
                    {
                      color: 'black',
                      fontFamily: 'bordan',
                    },
                  ]}
                >
                  {selectdrink}
                </Text>

                <TouchableOpacity onPress={() => dispatch(clearSelectDrink())}>
                  <Image source={images.closeIcon} />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <FilterButton
            title="Height"
            style={{ justifyContent: 'space-between', borderRadius: 14 }}
            onPress={() => navigation.navigate('height')}
            icon={images.heightIcon}
          />
          <View>
            <FilterButton
              title="Piercings"
              style={{ justifyContent: 'space-between', borderRadius: 14 }}
              onPress={() => navigation.navigate('pearcing')}
              icon={images.pearcingIcon}
            />
            {selectpeircing && (
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-start',
                  backgroundColor: '#EBFF00',
                  borderRadius: 50,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  alignItems: 'center',
                  gap: 15,
                  marginTop: 5,
                }}
              >
                <Text
                  style={[
                    commonStyles.smallText,
                    {
                      color: 'black',
                      fontFamily: 'bordan',
                    },
                  ]}
                >
                  {selectpeircing}
                </Text>

                <TouchableOpacity
                  onPress={() => dispatch(clearSelectPeircing())}
                >
                  <Image source={images.closeIcon} />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View>
            <FilterButton
              title="Religion"
              style={{ justifyContent: 'space-between', borderRadius: 14 }}
              onPress={() => navigation.navigate('religion')}
              icon={images.religionIcon}
            />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginTop: 5,
                  gap: 5,
                }}
              >
                {religion.map((item, index) => (
                  <View
                    key={`${item}-${index}`}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#EBFF00',
                      borderRadius: 50,
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      gap: 15,
                    }}
                  >
                    <Text
                      style={[
                        commonStyles.smallText,
                        {
                          color: 'black',
                          fontFamily: 'bordan',
                        },
                      ]}
                    >
                      {item}
                    </Text>
                    <TouchableOpacity
                      onPress={() => dispatch(clearReligion(item))}
                    >
                      <Image source={images.closeIcon} />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View>
            <FilterButton
              title="Sexuality"
              style={{ justifyContent: 'space-between', borderRadius: 14 }}
              onPress={() => navigation.navigate('saxuality')}
              icon={images.saxualityIcon}
            />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginTop: 5,
                  gap: 5,
                }}
              >
                {option.map((item, index) => (
                  <View
                    key={`${item}-${index}`}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#EBFF00',
                      borderRadius: 50,
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      gap: 15,
                    }}
                  >
                    <Text
                      style={[
                        commonStyles.smallText,
                        {
                          color: 'black',
                          fontFamily: 'bordan',
                        },
                      ]}
                    >
                      {item}
                    </Text>
                    <TouchableOpacity
                      onPress={() => dispatch(clearOption(item))}
                    >
                      <Image source={images.closeIcon} />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View>
            <FilterButton
              title="Smoking"
              style={{ justifyContent: 'space-between', borderRadius: 14 }}
              onPress={() => navigation.navigate('smooking')}
              icon={images.smookingIcon}
            />
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginTop: 5,
                  gap: 5,
                }}
              >
                {smooking.map((item, index) => (
                  <View
                    key={`${item}-${index}`}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#EBFF00',
                      borderRadius: 50,
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      gap: 15,
                    }}
                  >
                    <Text
                      style={[
                        commonStyles.smallText,
                        {
                          color: 'black',
                          fontFamily: 'bordan',
                        },
                      ]}
                    >
                      {item}
                    </Text>
                    <TouchableOpacity
                      onPress={() => dispatch(clearSmooking(item))}
                    >
                      <Image source={images.closeIcon} />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View>
            <FilterButton
              title="Tattoos"
              style={{ justifyContent: 'space-between', borderRadius: 14 }}
              onPress={() => navigation.navigate('tattoos')}
              icon={images.tatoosIcon}
            />
            {selecttattoos && (
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'flex-start',
                  backgroundColor: '#EBFF00',
                  borderRadius: 50,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  alignItems: 'center',
                  gap: 15,
                  marginTop: 5,
                }}
              >
                <Text
                  style={[
                    commonStyles.smallText,
                    {
                      color: 'black',
                      fontFamily: 'bordan',
                    },
                  ]}
                >
                  {selecttattoos}
                </Text>

                <TouchableOpacity
                  onPress={() => dispatch(clearSelectTattoos())}
                >
                  <Image source={images.closeIcon} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <Button
          title="Apply"
          buttonColor={colors.primary}
          textColor="black"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({});
