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
import store from './store';
import { Provider } from 'react-redux';



const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <NavigationContainer>
          <StatusBar
            barStyle={'dark-content'}
          />
          <StackNaviagtion />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>

  );
};

export default App;
