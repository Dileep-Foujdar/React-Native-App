import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import { useState, useRef } from 'react';
import Button from '../../components/Button';
const img1 = require('../../assets/images/onboarding1.png');
const img2 = require('../../assets/images/onboarding2.png');
const img3 = require('../../assets/images/onboarding3.png');
const img4 = require('../../assets/images/onboarding4.png');
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/RootNavigator';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'signUpOption'
>;

const data = [
  {
    id: 1,
    heading: 'Meet couples & singles',
    subHeading:
      'Pineapple is the app where it is at, a place to meet open-minded people.',
    img: img1,
  },
  {
    id: 2,
    heading: 'Explore the feed',
    subHeading:
    'Find out what people in your area are up to and share your experiences.',
    img: img2,
  },
  {
    id: 3,
    heading: 'Verified users',
    subHeading:
      'We pride ourself on real, verified users. A community made by swingers for swingers.',
    img: img3,
  },
  {
    id: 4,
    heading: 'Flirt',
    subHeading:
    'Chat with people who take you fancy, one on one or as a group.',
    img: img4,
  },
];

const SliderScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const swiperRef = useRef<Swiper | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.uperBox}>
        <ImageBackground
          style={styles.image}
          source={require('../../assets/images/background-image.jpg')}
        >
          <LinearGradient
            style={styles.gredient}
            colors={[
              'transparent',
              'rgba(26,27,34,0.2)',
              'rgba(26,27,34,0.6)',
              '#1A1B22',
            ]}
          />
          <Swiper
            showsPagination={false}
            ref={swiperRef}
            loop={false}
            onIndexChanged={setCurrentIndex}
          >
            {data.map((item) => {
              return (
                <View style={styles.uperImgBox} key={item.id}>
                  <Image source={item.img} />
                </View>
              );
            })}
          </Swiper>
        </ImageBackground>
      </View>
      <View style={styles.bottomBox}>
        <Text style={styles.heading}>{data[currentIndex].heading}</Text>
        <Text style={styles.subHeading}>{data[currentIndex].subHeading}</Text>
        <View style={styles.pagination}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>
        <Button
        buttonColor='#EBFF00'
        textColor="#000"
        style={styles.buttonBox}
          onPress={() => {
            if (currentIndex < data.length - 1) {
              swiperRef.current?.scrollBy(1);;
            } else {
              navigation.navigate('signUpOption')
            }
          }}
          title={currentIndex === data.length - 1 ? 'Get Started' : 'Next'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1B22',
    color: 'white',
  },
  uperBox: {
    flex: 7,
    width: '100%',
  },
  uperImgBox: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
  },
  bottomBox: {
    flex: 3,
    width: '100%',
    paddingHorizontal: 25,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gredient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 200,
  },
  heading: {
    fontFamily: 'bordan',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    fontWeight:'400',
    paddingBottom:5,
  },
  subHeading: {
    fontFamily: 'bordan',
    fontSize: 17,
    color: '#A5A7AF',
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#555',
    marginHorizontal: 4,
  },

  activeDot: {
    width: 20,
    backgroundColor: '#fff',
  },
  buttonBox:{
    borderRadius:50,
    marginTop:40
  }
});

export default SliderScreen;
