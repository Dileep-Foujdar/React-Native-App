import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import GoBackSearch from '../../components/GoBackSearch';
import { commonStyles } from '../../assets/style/style';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/RootNavigator';
import { useNavigation } from '@react-navigation/native';

type PropsType = NativeStackNavigationProp<RootStackParamList, 'filter'>;

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation<PropsType>();
  return (
    <View style={commonStyles.container1}>
      <View style={commonStyles.Goback}>
        <GoBackSearch
          value={search}
          onChangeText={setSearch}
          onPress={() => navigation.navigate('filter')}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
