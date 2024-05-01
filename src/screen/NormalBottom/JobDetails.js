import {View, Text,TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useRoute} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import GoBack from '../../common/GoBack';

const JobDetails = () => {
  const route = useRoute();
  const routeData = route.params.data;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: responsiveHeight(2),
        }}>
        <GoBack />
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
      <View style={{marginTop: responsiveHeight(2.7)}}>
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(3.8),
            fontWeight: '500',
            marginLeft: responsiveHeight(4),
          }}>
          {routeData.jobTitle}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(2.5),
            marginLeft: responsiveWidth(10),
            marginTop: responsiveHeight(4),
          }}>
          {routeData.Desc}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(2.5),
            marginLeft: responsiveWidth(10),
            marginTop: responsiveHeight(2),
            fontWeight: '500',
          }}>
          {'Experience Required : ' + routeData.Experience + ' Year'}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(2.5),
            marginLeft: responsiveWidth(10),
            marginTop: responsiveHeight(2),
            fontWeight: '500',
          }}>
          {'Skills Required : ' + routeData.skills}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(2.5),
            marginLeft: responsiveWidth(10),
            marginTop: responsiveHeight(2),
            fontWeight: '500',
          }}>
          {'Company : ' + routeData.company}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(2.5),
            marginLeft: responsiveWidth(10),
            marginTop: responsiveHeight(2),
            fontWeight: '500',
          }}>
          {'Salary : ' + routeData.Salary + ' Lacs/Yrs'}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(2.5),
            marginLeft: responsiveWidth(10),
            marginTop: responsiveHeight(2),
            fontWeight: '500',
          }}>
          {'PostedBy : ' + routeData.PostedName}
        </Text>
      </View>
      {/* bottom */}

      <TouchableOpacity 
        style={{
          width: responsiveWidth(30),
          height: responsiveHeight(7),
          position: 'absolute',
          marginLeft: responsiveWidth(7),
          top: '179%',
          borderRadius: 7,
          borderWidth: 0.8,
          justifyContent:'center',
          alignItems:'center'
        }}>
           <Entypo name="bookmarks" color={'black'} size={29} />
        </TouchableOpacity>

        <TouchableOpacity 
         style={{
          width: responsiveWidth(40),
          height: responsiveHeight(7),
          backgroundColor:'#5169F6',
          position: 'absolute',
          marginLeft: responsiveWidth(51),
          top: '179%',
          borderRadius: 7,
          borderWidth: 0.8,
          justifyContent:'center',
          alignItems:'center'
        }}
        >
            <Text style={{fontSize:responsiveFontSize(2.4),fontWeight:'500',color:'white'}}>Apply Now</Text>
        </TouchableOpacity>


    

     
    </View>
  );
};

export default JobDetails;
