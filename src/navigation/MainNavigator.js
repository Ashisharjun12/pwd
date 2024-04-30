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
import Blind from '../screen/jobSearch/Blind';
import Amputee from '../screen/jobSearch/Amputee';
import Normal from '../screen/jobSearch/Normal';

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

      {/* blind and amputee */}
      <Stack.Screen
        name="Blind"
        component={Blind}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Amputee"
        component={Amputee}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Normal"
        component={Normal}
        options={{headerShown: false}}
      />



      {/* blind and amputee end */}
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
