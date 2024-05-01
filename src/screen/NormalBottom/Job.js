import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import GoBack from '../../common/GoBack';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const Job = () => {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');
  const [jobs, setjobs] = useState([]);

  //searchjob method

  const searchjob = txt => {
    firestore()
      .collection('jobs')
      .where('category', '==', txt)
      .get()
      .then(snapshot => {
        console.log(snapshot.docs);
        let temp = [];
        snapshot.docs.forEach(item => {
          temp.push({...item.data(), id: item.id});
        });

        setjobs(temp);
      })
      .catch(error => {
        console.error('Error searching for jobs:', error);
      });
  };

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
          Search Jobs
        </Text>
      </View>

      {/* search input */}

      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          marginTop: responsiveHeight(2),
          marginBottom: responsiveHeight(10),
        }}>
        <View
          style={{
            width: responsiveWidth(90),
            height: responsiveHeight(7),
            borderRadius: 8,
            borderWidth: 0.8,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{marginLeft: responsiveWidth(4)}}>
            <Feather name="search" color="black" size={30} />
          </View>

          <TextInput
            placeholder={'Search Jobs...'}
            onChangeText={txt => {
              setSearch(txt);
              searchjob(txt);
            }}
            value={search}
            style={{
              width: responsiveWidth(63),
              marginLeft: responsiveWidth(4),
              fontSize: responsiveFontSize(2.4),
            }}
          />
          {search != '' && (
            <TouchableOpacity
              onPress={() => {
                setSearch('');
                searchjob('');
              }}>
              <AntDesign name="close" color="black" size={28} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* flatlist */}

      <FlatList
        data={jobs}
        renderItem={({item, index}) => {
          console.log(item);
          return (
            <TouchableOpacity onPress={()=>{
              navigation.navigate('JobDetails',{data:item})
            }}
              style={{
                width: responsiveWidth(90),
                height: responsiveHeight(20),
                backgroundColor: '#F1F4FF',
                marginBottom: responsiveHeight(3),
                alignSelf: 'center',
                borderRadius: 11,
                borderWidth: 0.5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.5),
                    fontWeight: '500',
                    color: 'black',
                    marginLeft: responsiveWidth(7),
                    marginTop: responsiveHeight(1),
                    marginBottom: responsiveHeight(1.6),
                  }}>
                  {item.jobTitle}
                </Text>
                <TouchableOpacity 
                  style={{
                    marginRight: responsiveWidth(9),
                    marginTop: responsiveHeight(2),
                  }}>
                  <Entypo name="bookmarks" color={'#5169F6'} size={29} />
                </TouchableOpacity>
              </View>

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
                  marginLeft: responsiveWidth(5),
                  marginTop: responsiveHeight(1),
                }}>
                {' Company : ' + item.company}
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
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Job;
