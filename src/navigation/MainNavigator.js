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

import Normal from '../screen/jobSearch/Normal';
import Card from '../screen/NormalBottom/Card';
import Job from '../screen/NormalBottom/Job';
import JobDetails from '../screen/NormalBottom/JobDetails';
import BlindAmputee from '../screen/jobSearch/BlindAmputee';
import Vocational from '../Pwd/Vocational';
import Technical from '../Pwd/Technical';
import NonTech from '../Pwd/NonTech';
import Story from '../Pwd/Story';
import Linklist from '../Pwd/Topic/Linklist';

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
        name="Normal"
        component={Normal}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BlindAmputee"
        component={BlindAmputee}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Vocational"
        component={Vocational}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Technical"
        component={Technical}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NonTech"
        component={NonTech}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Story"
        component={Story}
        options={{headerShown: false}}
      />

      {/* Topic */}
      <Stack.Screen
        name="Linklist"
        component={Linklist}
        options={{headerShown: false}}
      />




      {/* for normal */}
      <Stack.Screen
        name="Card"
        component={Card}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Job"
        component={Job}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="JobDetails"
        component={JobDetails}
        options={{headerShown: false}}
      />



      {/* normal end */}



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
