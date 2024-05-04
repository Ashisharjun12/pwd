import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import DocumentPicker from 'react-native-document-picker';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CustomUpload = ({ onFileSelect }) => {
  const handleUpload = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf], // Restrict to only PDF files
      });

      // Check if file was selected
      if (res) {
        const { name } = res;

        // Call the onFileSelect function passed from SignUpUser
        onFileSelect(name);

        // Inform user about successful selection
        Alert.alert('Success', 'Selected file: resume.pdf');
      }
    } catch (err) {
      console.log('DocumentPicker Error:', err);
      Alert.alert('Error', 'Failed to select file');
    }
  };

  return (
    <View
      style={{
        width: responsiveWidth(90),
        height: responsiveHeight(6.8),
        backgroundColor: '#F1F4FF',
        borderWidth: 0.2,
        alignSelf: 'center',
        marginTop: responsiveHeight(2),
        marginBottom: responsiveHeight(1.5),
        borderRadius: 3.5,
        justifyContent: 'center',
        paddingLeft: responsiveWidth(5),
        paddingRight: responsiveWidth(5),
      }}>
      <TouchableOpacity onPress={handleUpload}>
        <Text
          style={{
            color: 'black',
            fontSize: responsiveFontSize(2.2),
            alignSelf: 'flex-start',
            marginLeft: responsiveWidth(5),
            backgroundColor: '#F1F4FF',
            paddingLeft: responsiveWidth(2),
            paddingRight: responsiveWidth(2),
          }}>
          Upload Resume
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomUpload;
