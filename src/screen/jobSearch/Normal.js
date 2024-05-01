import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../NormalBottom/Home';
import Apply from '../NormalBottom/Apply';
import Chat from '../NormalBottom/Chat';
import UserAccount from '../NormalBottom/UserAccount';

const Tab = createBottomTabNavigator();
const Normal = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarShowLabel: false,
        tabBarActiveTintColor: '#5169F6',
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Entypo name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Apply" component={Apply}  options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Entypo name="bookmarks" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Chat" component={Chat}  options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbubble-sharp" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen
        name="Account"
        component={UserAccount}
        options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="account-circle" color={color} size={size} />
            ),
          }}
      />
    </Tab.Navigator>
  );
};

export default Normal;
