
import {  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigations/RootNavigator';

function App() {

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
        backgroundColor:'#1A1B22'
    }
});

export default App;
