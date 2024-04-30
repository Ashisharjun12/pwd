import { View, Text, Modal, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import GoBack from '../../common/GoBack';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomTextInput from '../../common/CustomTextInput';
import CustomDropDown from '../../common/CustomDropDown';
import SolidBtn from '../../common/SolidBtn';
import { Profile } from '../../Utils/Profile';
import firestore from '@react-native-firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../common/Loader';

const AddPost = () => {

const navigation =useNavigation()

  const [title, setTitle] = useState('');
  const [Desc, setDesc] = useState('');
  const [Experience, setExperience] = useState('');
  const [Salary, setSalary] = useState('');
  const [company, setCompany] = useState('');
  const [skills, setSkills] = useState('');
  const [categoryModal, setCategoryModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Select Category');
  const [skillModal, setSkillModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState('Select Skill');
  const [loading ,setLoading]=useState(false)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Reset selected skill when category changes
    setSelectedSkill('Select Skill');
  };


//method post jobs
const Postjob= async()=>{
  let id= await AsyncStorage.getItem('USER_ID')
  let name = await AsyncStorage.getItem('NAME')
  setLoading(true)
  firestore().collection('jobs').add({
    PostedBy:id,
    PostedName:name,
    jobTitle:title,
    Desc,Experience,Salary,company,skills:selectedSkill,category:selectedCategory
  }).then(()=>{
    setLoading(false)
    navigation.goBack()
    
  }).catch((err)=>{
    setLoading(false)
    console.log('You got some error '+ err)
  })

}

  return (
    <ScrollView style={{ marginBottom: responsiveHeight(2) }}>
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
          Post Jobs
        </Text>
      </View>
      <View>
        <CustomTextInput
          value={title}
          onChangeText={txt => setTitle(txt)}
          title={'Title'}
          placeholder={'Ex - Web Development'}
        />
        <CustomTextInput
          value={Desc}
          onChangeText={txt => setDesc(txt)}
          title={'Job Description'}
          placeholder={'Ex- job Description'}
        />
        <CustomDropDown
          value={selectedCategory}
          onChangeText={txt => handleCategoryChange(txt)}
          title={'Category'}
          placeholder={selectedCategory == 'Select Category' ? 'Select Category' : Profile.find(cat => cat.category === selectedCategory)?.category}
          onClick={() => setCategoryModal(true)}
        />
        <CustomDropDown
          value={selectedSkill}
          onChangeText={txt => setSelectedSkill(txt)}
          title={'Skills'}
          placeholder={selectedSkill}
          onClick={() => { setSkillModal(true) }}
        />
        <CustomTextInput
          value={Experience}
          onChangeText={txt => setExperience(txt)}
          keyboardType={'number-pad'}
          title={'Experience'}
          placeholder={'Ex-  Experience Required'}
        />
        <CustomTextInput
          value={Salary}
          onChangeText={txt => setSalary(txt)}
          keyboardType={'number-pad'}
          title={'Salary'}
          placeholder={'Ex-  10 Lacs'}
        />
        <CustomTextInput
          value={company}
          onChangeText={txt => setCompany(txt)}
          title={'Company'}
          placeholder={'Ex- Google'}
        />
      </View>
      <SolidBtn onClick={()=>{
        Postjob()
      }} title={'Post Job'} />
      <Modal visible={categoryModal} transparent style={{ flex: 1 }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: responsiveWidth(95),
              height: responsiveHeight(52),
              backgroundColor: '#F4F4F4',
              borderRadius: 10,
              borderWidth: .3
            }}>
            <Text style={{ color: 'black', fontSize: responsiveFontSize(2.7), marginTop: responsiveHeight(1), marginLeft: responsiveWidth(18), marginBottom: responsiveHeight(2) }}>Select Category</Text>
            <FlatList
              data={Profile}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => {
                    handleCategoryChange(item.category);
                    setCategoryModal(false);
                  }}
                    style={{
                      width: responsiveWidth(90),
                      height: responsiveHeight(5),
                      justifyContent: 'center',

                    }}>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2.3),
                        fontWeight: '500',
                        color: 'black',
                        width: '100%',
                        height: responsiveHeight(4),
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: responsiveWidth(12),
                        borderBottomWidth: .5
                      }}>
                      {item.category}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </Modal>
      <Modal visible={skillModal} transparent style={{ flex: 1 }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: responsiveWidth(95),
              height: responsiveHeight(52),
              backgroundColor: '#F4F4F4',
              borderRadius: 10,
              borderWidth: .3
            }}>
            <Text style={{ color: 'black', fontSize: responsiveFontSize(2.7), marginTop: responsiveHeight(1), marginLeft: responsiveWidth(18), marginBottom: responsiveHeight(2) }}>Select Skill</Text>
            <FlatList
              data={selectedCategory == 'Select Category' ? [] : Profile.find(cat => cat.category === selectedCategory)?.keywords || []}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => {
                    setSelectedSkill(item[0]);
                    setSkillModal(false);
                  }}
                    style={{
                      width: responsiveWidth(90),
                      height: responsiveHeight(5),
                      justifyContent: 'center',

                    }}>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2.3),
                        fontWeight: '500',
                        color: 'black',
                        width: '100%',
                        height: responsiveHeight(4),
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: responsiveWidth(12),
                        borderBottomWidth: .5
                      }}>
                      {item[0]}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </Modal>
      <Loader visible={loading}/>
    </ScrollView>
  );
};

export default AddPost;
