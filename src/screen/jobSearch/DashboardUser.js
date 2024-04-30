import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Blind from './Blind'
import Amputee from './Amputee'
import Normal from './Normal'


const Stack = createStackNavigator()
const DashboardUser = () => {
  return (
   <Stack.Navigator>
    <Stack.Screen name='Normal' component={Normal} options={{headerShown:false}}/>
    <Stack.Screen name='Blind' component={Blind} options={{headerShown:false}}/>
    <Stack.Screen name='Amputee' component={Amputee} options={{headerShown:false}}/>
   </Stack.Navigator>
  )
}

export default DashboardUser