import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation =useNavigation()

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('SelectUser')
        },3000)
    },[])
  return (
    <View>
      <Text>Splash screen</Text>
    </View>
  )
}

export default Splash