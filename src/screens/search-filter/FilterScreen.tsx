import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { commonStyles } from '../../assets/style/style';
import ThreePartButton from '../../components/ThreePartButton';
import FilterButton from '../../components/FilterButton';
import { images } from '../../assets/images/image';
import Button from '../../components/Button';
import { colors } from '../../assets/typography';

const FilterScreen = () => {
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
        <View style={{ gap: 15 }}>
          <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
            Age
          </Text>
          <FilterButton
            title="Add your preferences"
            style={{ justifyContent: 'space-between', borderRadius: 14 }}
            onPress={() => {}}
          />
        </View>
        <View style={{ gap: 15 }}>
          <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
            I’m Interested in
          </Text>
          <FilterButton
            title="Add your preferences"
            style={{ justifyContent: 'space-between', borderRadius: 14 }}
            onPress={() => {}}
          />
        </View>
        <View style={{ gap: 15 }}>
          <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
            Kinks
          </Text>
          <FilterButton
            title="Add your preferences"
            style={{ justifyContent: 'space-between', borderRadius: 14 }}
            onPress={() => {}}
          />
        </View>
        <View style={{ gap: 15 }}>
          <Text style={[commonStyles.whiteText, commonStyles.largeText]}>
            Advanced filters
          </Text>
          <FilterButton
            title="Body type"
            style={{ justifyContent: 'space-between', borderRadius: 14 }}
            onPress={() => {}}
            icon={images.bodyIcon}

          />
          <FilterButton
            title="Distance"
            style={{ justifyContent: 'space-between', borderRadius: 14 }}
            onPress={() => {}}
            icon={images.locationIcon}
          />
          <FilterButton
            title="Drinking"
            style={{ justifyContent: 'space-between', borderRadius: 14 }}
            onPress={() => {}}
            icon={images.drinkingIcon}
          />
          <FilterButton
            title="Height"
            style={{ justifyContent: 'space-between', borderRadius: 14 }}
            onPress={() => {}}
            icon={images.heightIcon}
          />
          <FilterButton
            title="Piercings"
            style={{ justifyContent: 'space-between', borderRadius: 14 }}
            onPress={() => {}}
            icon={images.pearcingIcon}
          />
          <FilterButton
            title="Religion"
            style={{ justifyContent: 'space-between', borderRadius: 14 }}
            onPress={() => {}}
            icon={images.religionIcon}
          />
          <FilterButton
            title="Sexuality"
            style={{ justifyContent: 'space-between', borderRadius: 14 }}
            onPress={() => {}}
            icon={images.saxualityIcon}
          />
          <FilterButton
            title="Smoking"
            style={{ justifyContent: 'space-between', borderRadius: 14 }}
            onPress={() => {}}
            icon={images.smookingIcon}
          />
          <FilterButton
            title="Tattoos"
            style={{ justifyContent: 'space-between', borderRadius: 14 }}
            onPress={() => {}}
            icon={images.tatoosIcon}
          />
        </View>
      </ScrollView>
      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <Button title="Apply" buttonColor={colors.primary} textColor='black' onPress={() => {}} />
      </View>
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({});
