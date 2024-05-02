import {View, Text} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const EditJob = () => {
  return (
    <View>
      <Text 
        style={{
          color: 'black',
          textAlign: 'center',
          marginTop: responsiveHeight(50),
          fontSize: responsiveFontSize(2.4),
        }}>
        EditJob functionality adding soon
      </Text>
    </View>
  );
};

export default EditJob;
