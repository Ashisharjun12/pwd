import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth ,responsiveFontSize} from 'react-native-responsive-dimensions'

const BorderBtn = ({title ,onClick}) => {
  return (
   <TouchableOpacity onPress={()=>onClick()}
    style={{
    width: responsiveWidth(90),
    borderColor:'black',
    borderWidth:1,
    height: responsiveHeight(7),
    borderRadius: 8,
    marginTop: responsiveHeight(1.9),
    justifyContent:'center',
    alignItems:'center',
    marginLeft:responsiveWidth(5),
    marginTop:responsiveHeight(3.5)
    
    
   }}>
    <Text style={{color:'black',fontSize:responsiveFontSize(2.6)}}>{title}</Text>

   </TouchableOpacity>
  )
}

export default BorderBtn