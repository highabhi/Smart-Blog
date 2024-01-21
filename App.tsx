import { StatusBar } from 'react-native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigator from './AppNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}} >
        <Navigator />
        <StatusBar backgroundColor={'#F5F5F5'} barStyle="dark-content" />
      </GestureHandlerRootView>
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
