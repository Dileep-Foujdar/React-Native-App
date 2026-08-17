import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { commonStyles } from '../../assets/style/style';
import Header from '../../components/Header';
import { images } from '../../assets/images/image';
import postData from '../../constants/postdata';
import Button from '../../components/Button';
import ReportModal from '../../components/ReportModal';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/RootNavigator';
import { useNavigation } from '@react-navigation/native';

type PropsType = NativeStackNavigationProp<RootStackParamList,'comment'>

const HomeScreen = () => {
  const navigation = useNavigation<PropsType>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedUserName, setSelectedUserName] = useState<string>('');
  const [likedPostIds, setLikedPostIds] = useState<number[]>([]);

  const handleLike = (postId: number) => {
    if (likedPostIds.includes(postId)) {
      return;
    }

    setLikedPostIds(prev => [...prev, postId]);
  };

  return (
    <SafeAreaView style={commonStyles.container1}>
      <View style={{ position: 'absolute', width: '100%', top: 0 }}>
        <Header />
      </View>
      <ScrollView style={{ marginTop: 70 }}>
        <View style={{ padding: 20 }}>
          <Text
            style={[
              commonStyles.whiteText,
              commonStyles.largeText,
              { color: 'white', fontWeight: '600' },
            ]}
          >
            What’s on your mind?
          </Text>
        </View>
        <FlatList
          data={postData}
          renderItem={({ item, index }) => {
            return (
              <View key={item.id}>
                <View
                  style={{
                    borderTopColor: '#6E6F72',
                    borderTopWidth: 1.5,
                    borderBottomColor: '#6E6F72',
                    borderBottomWidth: 1.5,
                    paddingVertical: 5,
                  }}
                >
                  <View style={{ paddingHorizontal: 20 }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: 15,
                      }}
                    >
                      <View style={styles.imageBox}>
                        <Image
                          style={styles.image}
                          source={{ uri: item.iconImage }}
                        />
                        <View
                          style={{
                            justifyContent: 'space-between',
                            height: 45,
                          }}
                        >
                          <View style={{ flexDirection: 'row', gap: 10 }}>
                            <Text
                              style={[
                                commonStyles.whiteText,
                                commonStyles.smallText,
                                {
                                  color: 'white',
                                  fontWeight: '600',
                                  fontSize: 20,
                                },
                              ]}
                            >
                              {item.name}
                            </Text>
                            {item.catg === 'couple' ? (
                              <Image source={images.friendIcon} />
                            ) : (
                              ''
                            )}
                          </View>
                          <Text
                            style={[
                              commonStyles.whiteText,
                              commonStyles.smallText,
                            ]}
                          >
                            {item.postTime}
                          </Text>
                        </View>
                      </View>
                      <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                          onPress={() => {
                            setSelectedUserName(item.name);
                            setOpenModal(true);
                          }}
                          style={{ alignItems: 'center' }}
                        >
                          <Text
                            style={[
                              commonStyles.whiteText,
                              commonStyles.largeText,
                              { fontSize: 40 },
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
                          { color: 'white', paddingBottom: 20 },
                        ]}
                      >
                        {item.deatail}
                      </Text>
                    </View>
                  </View>
                  {item.postImage ? (
                    <View style={{ height: 400 }}>
                      <Image
                        style={{
                          height: '100%',
                          width: '100%',
                          objectFit: 'cover',
                        }}
                        source={{ uri: item.postImage }}
                      />
                    </View>
                  ) : (
                    ''
                  )}
                  <View style={{ paddingHorizontal: 20 }}>
                    <View
                      style={{
                        borderTopColor: 'gray',
                        borderTopWidth: item.postImage ? 0 : 0.5,
                        paddingVertical: 15,
                        flexDirection: 'row',
                      }}
                    >
                      <Pressable
                        disabled={likedPostIds.includes(item.id)}
                        onPress={() => handleLike(item.id)}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                      >
                        <Image source={images.likeIcon} />
                        <Text
                          style={[
                            commonStyles.whiteText,
                            commonStyles.smallText,
                            { paddingLeft: 5, paddingRight: 20 },
                          ]}
                        >
                          {item.likeCount +
                            (likedPostIds.includes(item.id) ? 1 : 0)}
                        </Text>
                      </Pressable>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('comment')}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                      >
                        <Image source={images.commentIcon} />
                        <Text
                          style={[
                            commonStyles.whiteText,
                            commonStyles.smallText,
                            { paddingLeft: 5 },
                          ]}
                        >
                          {item.comments.length} comments
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {(index + 1) % 3 === 0 && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingVertical: 40,
                      gap: 15,
                      paddingHorizontal: 20,
                    }}
                  >
                    <Image source={images.logo} />
                    <Text
                      style={[commonStyles.largeText, commonStyles.whiteText]}
                    >
                      We want to hear from you
                    </Text>
                    <Text
                      style={[
                        commonStyles.whiteText,
                        commonStyles.smallText,
                        { textAlign: 'center' },
                      ]}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fermentum purus pharetra eu pharetra id enim, leo commodo.{' '}
                    </Text>
                    <Button
                      title="Click here to leave feedback"
                      onPress={() => {}}
                      buttonColor="#EBFF00"
                      textColor="black"
                      style={{ width: '100%' }}
                    />
                  </View>
                )}
              </View>
            );
          }}
        />
      </ScrollView>
      <ReportModal
        visible={openModal}
        onCloseRequest={() => setOpenModal(false)}
        userName={selectedUserName}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  imageBox: {
    height: 45,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  image: {
    height: 45,
    width: 45,
    objectFit: 'cover',
    borderRadius: 100,
  },
});
