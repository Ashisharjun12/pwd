import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Normal from './Normal'
import BlindAmputee from './BlindAmputee'


const Stack = createStackNavigator()
const DashboardUser = () => {
  return (
   <Stack.Navigator >
    
    <Stack.Screen name='Normal' component={Normal} options={{headerShown:false}}/>
    <Stack.Screen name='BlindAmputee' component={BlindAmputee} options={{headerShown:false}}/>
  
   </Stack.Navigator>
  )
}

export default DashboardUser