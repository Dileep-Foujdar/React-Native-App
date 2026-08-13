import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1B22',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  container1: {
    flex: 1,
    backgroundColor: '#1A1B22',
  },
  whiteText: {
    color: 'white',
    fontFamily: 'bordan',
    textAlign: 'center',
  },
  Goback: {
    height: 80,
    justifyContent: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#2A2B32',
  },
  bottomButton: {
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 25,
    width: '100%',
  },
  smallText: {
    textAlign: 'left',
    color: '#A5A7AF',
    lineHeight: 20,
    fontSize: 17,
  },
  largeText: {
    fontSize: 24,
    textAlign: 'left',
  },
  
});
