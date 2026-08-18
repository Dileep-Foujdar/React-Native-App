import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { commonStyles } from '../../assets/style/style';
import CommentButton from '../../components/CommentButton';
import commentData from '../../constants/commentsdata';
import { images } from '../../assets/images/image';
import { colors } from '../../assets/typography';
import SingleReportModal from '../../components/SingleReportModal';

interface commentData {
  id: number;
  name: string;
  iconImage: string;
  comment: string;
  time: string;
  like: number;
}

const CommentScreen = () => {
  const [visible,setVisible] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const [comment, setComment] = useState('');
  const handleReply = (name: string) => {
    setComment(`@${name} `);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };
  return (
    <View style={commonStyles.container1}>
      <View style={commonStyles.Goback}>
        <CommentButton />
      </View>
      <FlatList
        data={commentData}
        renderItem={({ item, index }) => {
          const lastindex = commentData.length - 1;
          return (
            <View key={item.id} style={{ padding: 20 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View style={{ flexDirection: 'row', gap: 10 }}>
                  <Image
                    style={{ height: 40, width: 40, borderRadius: 100 }}
                    source={{ uri: item.iconImage }}
                  />
                  <Text
                    style={[
                      commonStyles.whiteText,
                      commonStyles.smallText,
                      { color: 'white' },
                    ]}
                  >
                    {item.name}
                  </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <TouchableOpacity
                    onPress={()=>setVisible(true)}
                    style={{ alignItems: 'center' }}
                  >
                    <Text
                      style={[
                        commonStyles.whiteText,
                        commonStyles.largeText,
                        { fontSize: 40,marginBottom:10 },
                      ]}
                    >
                      ...
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text
                  style={[
                    commonStyles.whiteText,
                    commonStyles.smallText,
                    { paddingLeft: 50 },
                  ]}
                >
                  {item.comment}
                </Text>
              </View>
              <View
                style={{
                  paddingLeft: 50,
                }}
              >
                <View
                  style={{
                    paddingBottom: 10,
                    gap: 15,
                    paddingTop: 10,
                    flexDirection: 'row',
                    borderBottomColor: colors.lineColor,
                    borderBottomWidth: lastindex === index ? 0 : 1,
                  }}
                >
                  <Text
                    style={[commonStyles.whiteText, commonStyles.smallText]}
                  >
                    {item.time}
                  </Text>
                  <View style={{ flexDirection: 'row', gap: 5 }}>
                    <Image source={images.likeIcon} />
                    <Text
                      style={[commonStyles.whiteText, commonStyles.smallText]}
                    >
                      {item.like} winks
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      handleReply(item.name);
                    }}
                  >
                    <Text
                      style={[commonStyles.whiteText, commonStyles.smallText]}
                    >
                      Reply
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          backgroundColor: colors.background,
          position: 'relative',
          height: 100,
          padding: 20,
          borderTopColor: colors.lineColor,
          borderTopWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            flexDirection: 'row',
            backgroundColor: '#262A34',
            width: '100%',
            borderRadius: 50,
            paddingHorizontal: 15,
            paddingVertical: 8,
          }}
        >
          <TextInput
            value={comment}
            onChangeText={setComment}
            ref={inputRef}
            placeholderTextColor="white"
            placeholder="Add a comment..."
            style={{ width: '75%', color: 'white' }}
          />
          <TouchableOpacity style={{}}>
            <Text
              style={[
                commonStyles.whiteText,
                commonStyles.smallText,
                {
                  backgroundColor: colors.primary,
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 50,
                  color: 'black',
                },
              ]}
            >
              Post
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <SingleReportModal visible={visible} onCloseRequest={()=>setVisible(false)} />
    </View>
  );
};

export default CommentScreen;

const styles = StyleSheet.create({});
