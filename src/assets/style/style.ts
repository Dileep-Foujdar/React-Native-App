import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1B22',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 25,
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
    fontSize: 15,
  },
  largeText: {
    fontSize: 20,
    textAlign: 'left',
  },
  inputcontainer: {
    flexDirection: 'row',
    backgroundColor: '#262A34',
    width: '100%',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 5,
    gap: 4,
    borderWidth: 1,
  },
  input: {
    borderRadius: 12,
    fontSize: 14,
    width: '100%',
    color: 'white',
    fontFamily: 'bordan',
  },
  
});
