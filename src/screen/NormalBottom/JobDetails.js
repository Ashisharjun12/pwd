import { View, Text } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useRoute } from '@react-navigation/native'
import GoBack from '../../common/GoBack'

const JobDetails = () => {
    const route = useRoute()
    const routeData = route.params.data
  return (
    <View>
         <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: responsiveHeight(2),
        }}>
        <GoBack/>
        <Text
          style={{
            fontSize: responsiveFontSize(2.8),
            marginTop: responsiveHeight(1.6),
            marginLeft: responsiveWidth(19),
            color: 'black',
            fontWeight: '500',
          }}>
          Job Details
        </Text>
      </View>
      {/* detalis */}
      <View style={{marginTop:responsiveHeight(2.7)}}>
      <Text style={{color:'black',fontSize:responsiveFontSize(3.8),fontWeight:'500',marginLeft:responsiveHeight(5)}}>{routeData.jobTitle}</Text>
      <Text>{routeData.Desc}</Text>

      </View>
    
    </View>
  )
}

export default JobDetails