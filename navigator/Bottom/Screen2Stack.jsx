import {View, Text} from 'react-native';
import React from 'react';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Bottom = createBottomTabNavigator();

const Screen2Stack = () => {
  return (
    <Bottom.Navigator initialRouteName="Screen2">
      <Bottom.Screen
        name="screen1"
        component={Screen1}
        options={{headerShown: false}}
      />
      <Bottom.Screen
        name="Screen2"
        component={Screen2}
        options={{headerShown: false}}
      />
    </Bottom.Navigator>
  );
};

export default Screen2Stack;
