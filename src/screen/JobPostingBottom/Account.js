import { View, Text ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GoBack from '../../common/GoBack'
import SolidBtn from '../../common/SolidBtn';
import { useNavigation } from '@react-navigation/native';


const Account = () => {
  const navigation = useNavigation()



  //method for logout

  const handleLogout = ()=>{
    //addding soon
  }
  return (
    <View>
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
          Account
        </Text>
      </View>
      <View>
      <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: responsiveHeight(2),
          }}>
          <View
            style={{
              borderWidth:.9,
              padding: 2.8,
              borderRadius: 99,
            }}>
            <Image
              style={{
                width: responsiveWidth(29),
                height: responsiveHeight(13),
                borderRadius: 99,
              }}
              source={
                require('../../Image/user.png')
              }
            />
           
          </View>
          <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      width: responsiveWidth(56),
                      borderColor: 'black',
                      borderWidth: 1,
                      height: responsiveHeight(5),
                      borderRadius: 8,
                      marginTop: responsiveHeight(3),
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: responsiveWidth(5),
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: responsiveFontSize(2.5),
                      }}>
                      Edit Profile
                    </Text>
                  </TouchableOpacity>


                  {/* functions */}
                  <View>
        <View
          style={{
            marginTop: responsiveHeight(4),
            marginLeft: responsiveWidth(6),
          }}>
          <TouchableOpacity
            onPress={() => {
              
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: responsiveWidth(7),
            }}>
            <Ionicons name="bag-sharp" color={'black'} size={37} />
            <Text
              style={{
                fontSize: responsiveFontSize(2.2),
                color: 'black',
                fontWeight: '500',
              }}>
              My Jobs
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(0.2),
            backgroundColor: '#B2B2B2',
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
          }}></View>
      </View>

      {/* email */}
      <View>
        <View
          style={{
            marginTop: responsiveHeight(4),
            marginLeft: responsiveWidth(6),
          }}>
          <TouchableOpacity
            onPress={() => {
              
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: responsiveWidth(7),
            }}>
            <MaterialIcons name="email" color={'black'} size={37} />
            <Text
              style={{
                fontSize: responsiveFontSize(2.2),
                color: 'black',
                fontWeight: '500',
              }}>
              Email
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(0.2),
            backgroundColor: '#B2B2B2',
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
          }}></View>
      </View>

      {/* settings */}

      <View>
        <View
          style={{
            marginTop: responsiveHeight(4),
            marginLeft: responsiveWidth(6),
          }}>
          <TouchableOpacity
            onPress={() => {
              
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: responsiveWidth(7),
            }}>
            <Ionicons name="settings-sharp" color={'black'} size={37} />
            <Text
              style={{
                fontSize: responsiveFontSize(2.2),
                color: 'black',
                fontWeight: '500',
              }}>
              settings
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(0.2),
            backgroundColor: '#B2B2B2',
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
          }}></View>
      </View>

      {/* version */}
      <View>
        <View
          style={{
            marginTop: responsiveHeight(4),
            marginLeft: responsiveWidth(6),
          }}>
          <TouchableOpacity
            onPress={() => {
              
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              gap: responsiveWidth(7),
            }}>
            <Ionicons name="git-compare-outline" color={'black'} size={37} />
            <Text
              style={{
                fontSize: responsiveFontSize(2.2),
                color: 'black',
                fontWeight: '500',
              }}>
              Version V0.0.1
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: responsiveWidth(100),
            height: responsiveHeight(0.2),
            backgroundColor: '#B2B2B2',
            alignSelf: 'center',
            marginTop: responsiveHeight(1),
            marginBottom:responsiveHeight(3)
          }}></View>
      </View>
      </View>
      <SolidBtn onClick={()=>{navigation.navigate('SelectUser')}} title={'Logout'}/>
    </View>
    </View>
  )
}

export default Account;

