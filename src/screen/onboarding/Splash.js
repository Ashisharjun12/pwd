import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = () => {
    const navigation =useNavigation()

    useEffect(()=>{
        setTimeout(()=>{
            // getData()
            // navigation.navigate('DashboardUser')
            navigation.navigate('SelectUser')
            // navigation.navigate('BlindAmputee')
           
        },1000)
    },[])

    const getData= async()=>{
      let type = await AsyncStorage.getItem('USER_TYPE')
      if(type!=null){
        if(type=='company'){
          navigation.navigate('DashboardCompany')
        }
       
      }else{
        navigation.navigate('SelectUser')
      }
      
    }
  return (
    <View>
      <Text>Splash screen</Text>
    </View>
  )
}

export default Splash