import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigator from './AppNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider, Text } from 'react-native-elements';

export default function App() {



  const [fontsLoaded] = useFonts({
    "Mont-Regular": require("./assets/fonts/Mont-Regular.otf"),
    "Mont-Black": require("./assets/fonts/Mont-Black.otf"),
    "Mont-Bold": require("./assets/fonts/Mont-Bold.otf"),
    "Mont-BlackItalic": require("./assets/fonts/Mont-BlackItalic.otf"),
    "Mont-Light": require("./assets/fonts/Mont-Light.otf"),
    "Mont-SemiBold": require("./assets/fonts/Mont-SemiBold.otf"),
  });


  useEffect(() => {
    const showSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
    };
    showSplashScreen();
  }, []);

  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    };
    if (fontsLoaded) hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }} >
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
