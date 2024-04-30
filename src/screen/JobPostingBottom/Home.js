import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import GoBack from '../../common/GoBack';
import EditJob from './EditJob';

const Home = () => {
    const navigation =useNavigation()
  const isFocused = useIsFocused();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs();
  }, [isFocused]);

  //method of jobs get
  const getJobs = async () => {
    let id = await AsyncStorage.getItem('USER_ID');

    firestore()
      .collection('jobs')
      .where('PostedBy', '==', id)
      .get()
      .then(data => {
        let temp = [];
        data.docs.forEach(item => {
          temp.push({...item.data(), id: item.id});
        });
        setJobs(temp);
      });
  };

  //method for delete jobs
  const deleteJobs = id => {
    firestore()
      .collection('jobs')
      .doc(id)
      .delete()
      .then(() => {
        getJobs();
      });
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: responsiveHeight(2),
          marginBottom: responsiveHeight(3),
        }}>
        <GoBack />
        <Text
          style={{
            fontSize: responsiveFontSize(3),
            color: 'black',
            marginTop: responsiveHeight(1.5),
            marginLeft: responsiveWidth(18),
            fontWeight: '500',
          }}>
          Posted Jobs
        </Text>
      </View>

      {jobs.length > 0 ? (
        <FlatList
          data={jobs}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: responsiveWidth(90),
                  height: responsiveHeight(28),
                  backgroundColor: '#F1F4FF',
                  marginBottom: responsiveHeight(3),
                  alignSelf: 'center',
                  borderRadius: 11,
                  borderWidth: 0.5,
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.5),
                    fontWeight: '500',
                    color: 'black',
                    marginLeft: responsiveWidth(7),
                    marginTop: responsiveHeight(1),
                  }}>
                  {item.jobTitle}
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.4),
                    fontWeight: '400',
                    color: 'black',
                    marginLeft: responsiveWidth(7),
                    marginTop: responsiveHeight(1),
                  }}>
                  {item.Desc}
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.4),
                    fontWeight: '400',
                    color: 'black',
                    marginLeft: responsiveWidth(7),
                    marginTop: responsiveHeight(1),
                  }}>
                  {' Salary : ' + item.Salary + '/Lacs'}
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.4),
                    fontWeight: '400',
                    color: 'black',
                    marginLeft: responsiveWidth(7),
                    marginTop: responsiveHeight(1),
                  }}>
                  {'Category : ' + item.category}
                </Text>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.4),
                    fontWeight: '400',
                    color: 'black',
                    marginLeft: responsiveWidth(7),
                    marginTop: responsiveHeight(1),
                  }}>
                  {'Skills : ' + item.skills}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => {navigation.navigate('EditJob')}}
                    style={{
                      width: responsiveWidth(34),
                      borderColor: 'black',
                      borderWidth: 1,
                      height: responsiveHeight(5),
                      borderRadius: 8,
                      marginTop: responsiveHeight(1),
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: responsiveWidth(5),
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: responsiveFontSize(2.5),
                      }}>
                      Edit
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      deleteJobs(item.id);
                    }}
                    style={{
                      width: responsiveWidth(34),
                      backgroundColor: '#5169F6',
                      height: responsiveHeight(5),
                      borderRadius: 8,
                      marginTop: responsiveHeight(1),
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: responsiveWidth(5),
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: responsiveFontSize(2.6),
                      }}>
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={{marginTop: responsiveHeight(40)}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: responsiveFontSize(2.7),
              color: 'black',
              fontWeight: '500',
            }}>
            No Jobs Created
          </Text>
        </View>
      )}
    </View>
  );
};

export default Home;
