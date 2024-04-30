import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginCompany from '../screen/jobPosting/LoginCompany';
import SignUpCompany from '../screen/jobPosting/SignUpCompany';
import DashboardCompany from '../screen/jobPosting/DashboardCompany';

const Stack = createNativeStackNavigator();
const JobPostNavigatior = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginCompany"
        component={LoginCompany}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpCompany"
        component={SignUpCompany}
        options={{headerShown: false}}
      />
     
    </Stack.Navigator>
  );
};

export default JobPostNavigatior;
