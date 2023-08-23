import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from '../Bottom/Main';
import CustomDrawerComponent from './CustomDrawerComponent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={Main} />
      <Drawer.Screen name="Custom" component={CustomDrawerComponent} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
