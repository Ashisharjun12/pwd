import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginUser from '../screen/jobSearch/LoginUser';
import SignUpUser from '../screen/jobSearch/SignUpUser';



const Stack = createNativeStackNavigator();
const JobSearchNavigatior = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginUser"
        component={LoginUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpUser"
        component={SignUpUser}
        options={{headerShown: false}}
      />
     
    </Stack.Navigator>
  );
};

export default JobSearchNavigatior;