import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { commonStyles } from '../assets/style/style';
import InputText from './InputText';
import { images } from '../assets/images/image';
import Button from './Button';
import SimpleInputText from './SimpleTextInput';

const genderOptions = [
  { id: '1', name: 'Polygender' },
  { id: '2', name: 'Trigender' },
  { id: '3', name: 'Non-binary' },
  { id: '4', name: 'Transgender Man' },
  { id: '5', name: 'Transgender Woman' },
  { id: '6', name: 'Genderqueer' },
  { id: '7', name: 'Agender' },
  { id: '8', name: 'Genderfluid' },
  { id: '9', name: 'Bigender' },
  { id: '10', name: 'Two-Spirit' },
  { id: '11', name: 'Demiboy' },
  { id: '12', name: 'Demigirl' },
  { id: '13', name: 'Demi-nonbinary' },
  { id: '14', name: 'Genderflux' },
  { id: '15', name: 'Demiflux' },
  { id: '16', name: 'Neutrois' },
  { id: '17', name: 'Androgyne' },
  { id: '18', name: 'Pangender' },
  { id: '19', name: 'Maverique' },
  { id: '20', name: 'Intergender' },
  { id: '21', name: 'Ceterogender' },
  { id: '22', name: 'Libragender' },
  { id: '23', name: 'Graygender' },
];

interface PropsType {
  visible: boolean;
  onClose: () => void;
  selectgender: string;
  onSelectgender: (gender: string) => void;
}

const GenderModal = ({
  visible,
  onClose,
  selectgender,
  onSelectgender,
}: PropsType) => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState(genderOptions);

  const handleSearch = (text: string) => {
    setSearchText(text);

    const filtered = genderOptions.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );

    setResults(filtered);
  };
  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="slide"
      style={{ flex: 1 }}
    >
      <View style={commonStyles.container1}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center',
            gap: 15,
          }}
        >
          <View style={{ flex: 1 }}>
            <SimpleInputText
              value={searchText}
              onChangeText={handleSearch}
              icon={images.SearchIcon}
              placeholder="Search"
            />
          </View>

          <TouchableOpacity onPress={onClose}>
            <Text style={[commonStyles.whiteText, commonStyles.smallText]}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 6 }}>
          <FlatList
            data={results}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  onSelectgender(item.name);
                }}
                style={{
                  padding: 16,
                  borderRadius: 12,
                  gap: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text
                  style={[
                    commonStyles.whiteText,
                    commonStyles.smallText,
                    { textAlign: 'left', color: 'white' },
                  ]}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    height: 26,
                    width: 26,
                    borderRadius: 4,
                  }}
                >
                  {selectgender === item.name && (
                    <Image
                      style={{ display: 'flex' }}
                      source={images.blackRightSign}
                    />
                  )}
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={[
            commonStyles.bottomButton,
            { opacity: selectgender ? 1 : 0.5 },
          ]}
        >
          <Button
            title="Save"
            onPress={onClose}
            isDisabled={!selectgender}
            buttonColor="#EBFF00"
            textColor="black"
          />
        </View>
      </View>
    </Modal>
  );
};

export default GenderModal;

const styles = StyleSheet.create({});
