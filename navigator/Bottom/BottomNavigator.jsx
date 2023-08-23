import {Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Bottom = createBottomTabNavigator();
function HomeScreen() {
  return <Text>Home</Text>;
}
function NetworkScreen() {
  return <Text>Network</Text>;
}

function PostScreen() {
  return <Text>Post</Text>;
}
function NotificationScreen() {
  return <Text>Notification</Text>;
}
function JobsScreen() {
  return <Text>Jobs</Text>;
}
const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',

        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Network') {
            iconName = focused ? 'git-network' : 'git-network-outline';
          } else if (route.name === 'Post') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Notification') {
            iconName = focused
              ? 'notifications-sharp'
              : 'notifications-outline';
          } else if (route.name === 'Jobs') {
            iconName = focused ? 'bag-add' : 'bag-add-outline';
          }
          return (
            <IonIcon
              name={iconName}
              size={size}
              color={color}
              style={
                focused
                  ? {
                      borderTopWidth: 3,
                      paddingTop: 6,
                      paddingHorizontal: 20,
                    }
                  : {
                      padding: 5,
                    }
              }
            />
          );
        },
      })}>
      <Bottom.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Bottom.Screen
        name="Network"
        component={NetworkScreen}
        options={{headerShown: false}}
      />
      <Bottom.Screen
        name="Post"
        component={PostScreen}
        options={{headerShown: false}}
      />
      <Bottom.Screen
        name="Notification"
        component={NotificationScreen}
        options={{headerShown: false}}
      />

      <Bottom.Screen
        name="Jobs"
        component={JobsScreen}
        options={{headerShown: false}}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;
