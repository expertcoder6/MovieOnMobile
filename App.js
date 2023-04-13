/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import StackNaviagtion from './src/navigation/StackNaviagtion';



const App= () => {

  return (
    <NavigationContainer>
    <SafeAreaView style={{flex:1,backgroundColor:"#fff"}}>
      <StatusBar
        barStyle={'dark-content'}
      />
      
      <StackNaviagtion/>
    </SafeAreaView>
    </NavigationContainer>

  );
};

export default App;
