import {View, Text} from 'react-native';
import React from 'react';
import Splash from '../screen/onboarding/Splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import JobPostNavigatior from './JobPostNavigatior';
import JobSearchNavigator from './JobSearchNavigator';
import SelectUser from '../screen/onboarding/SelectUser';
import DashboardCompany from '../screen/jobPosting/DashboardCompany';
import EditJob from '../screen/JobPostingBottom/EditJob';
import DashboardUser from '../screen/jobSearch/DashboardUser';

const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectUser"
          component={SelectUser}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="JobPostNavigatior"
          component={JobPostNavigatior}
          options={{headerShown: false}}
        />
         <Stack.Screen
        name="DashboardCompany"
        component={DashboardCompany}
        options={{headerShown: false}}
      />
         <Stack.Screen
        name="DashboardUser"
        component={DashboardUser}
        options={{headerShown: false}}
      />
         <Stack.Screen
        name="EditJob"
        component={EditJob}
        options={{headerShown: false}}
      />
        <Stack.Screen
          name="JobSearchNavigator"
          component={JobSearchNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
