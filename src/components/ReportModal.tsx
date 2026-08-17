import {
  StyleSheet,
  Text,
  Modal,
  View,
  Animated,
  Pressable,
} from 'react-native';
import React from 'react';
import { commonStyles } from '../assets/style/style';
import { colors } from '../assets/typography';
import Button from './Button';
import { images } from '../assets/images/image';

interface propsType {
  visible: boolean;
  onCloseRequest: () => void;
  userName?: string;
}

const ReportModal = ({ visible, onCloseRequest, userName }: propsType) => {
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
            height: '27%',
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
            <View
              style={{
                borderTopWidth: 0.5,
                borderTopColor: 'gray',
                borderBottomWidth: 0.5,
                borderBottomColor: 'gray',
              }}
            >
              <Button
                title={`Unfollow ${userName}`}
                onPress={() => {}}
                buttonColor="black"
                textColor="white"
                icon={images.unfollowIcon}
                style={{ justifyContent: 'flex-start' }}
              />
            </View>
            <Button
              title={`Block ${userName}`}
              onPress={() => {}}
              buttonColor="black"
              textColor="white"
              icon={images.blockIcon}
              style={{ justifyContent: 'flex-start' }}
            />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ReportModal;

const styles = StyleSheet.create({
  overlay: {},
});
