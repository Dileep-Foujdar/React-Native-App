import {
  StyleSheet,
  Modal,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import { colors } from '../assets/typography';
import Button from './Button';
import { images } from '../assets/images/image';

interface propsType {
  visible: boolean;
  onCloseRequest: () => void;
  userName?: string;
}

const SingleReportModal = ({ visible, onCloseRequest, userName }: propsType) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onCloseRequest}
      animationType="slide"
      transparent
    >
      <Pressable
        onPress={onCloseRequest}
        style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <Pressable
          onPress={() => {}}
          style={{
            height: '16%',
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'black',
            width: '100%',
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            padding: 20,
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                width: 40,
                backgroundColor: colors.lineColor,
                height: 5,
                borderRadius: 100,
              }}
            />
          </View>
          <View style={{ gap: 5 }}>
            <Button
              title="Report post"
              onPress={() => {}}
              buttonColor="black"
              textColor="white"
              icon={images.reportIcon}
              style={{ justifyContent: 'flex-start' }}
            />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default SingleReportModal;

const styles = StyleSheet.create({
  overlay: {},
});
