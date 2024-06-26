import { View, Text, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Card = ({title,imgsrc,style,onClick,styleCard,textstyle}) => {
  return (
    <TouchableOpacity onPress={()=>{onClick()}} style={[{width:responsiveWidth(40),height:responsiveHeight(25),backgroundColor:'#FDBF21',borderRadius:9,borderWidth:.4,justifyContent:'center',alignItems:'center'},style,styleCard]}>
        <Image  source={imgsrc ? imgsrc : null}/>
      <Text style={[{fontSize:responsiveFontSize(2.5),marginTop:responsiveHeight(3),fontWeight:'500',color:'white'},textstyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Card