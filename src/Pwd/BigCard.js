import { View, Text, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const BigCard = ({title,style,onClick,textstyle}) => {
  return (
    <TouchableOpacity onPress={()=>{onClick()}} style={[{width:responsiveWidth(40),height:responsiveHeight(25),backgroundColor:'#FDBF21',borderRadius:9,borderWidth:.4,justifyContent:'center',alignItems:'center'},style]}>
        {/* <Image source={imgsrc}/> */}
      <Text style={[{fontSize:responsiveFontSize(2.5),marginTop:responsiveHeight(3),fontWeight:'500',color:'white'},textstyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default BigCard