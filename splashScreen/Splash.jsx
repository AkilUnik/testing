import {View, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Drawer');
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <IonIcon
        name="logo-linkedin"
        size={120}
        color="#0073b2"
        style={{borderRadius: 50}}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Splash;
