import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import Detail from './src/pages/Detail';
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';


const MainNavigator = createStackNavigator();

export default function App() {

  return (

    <Provider store={store}>
      <NavigationContainer>

        <MainNavigator.Navigator>
          <MainNavigator.Screen name="Shows" component={Home} />
          <MainNavigator.Screen name="Detail" component={Detail} />
        </MainNavigator.Navigator>

        <StatusBar style="auto" />

      </NavigationContainer>
    </Provider>

  );
}