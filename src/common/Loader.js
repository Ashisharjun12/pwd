import {View, Text, Modal, ActivityIndicator} from 'react-native';
import React from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const Loader = ({visible}) => {
  return (
    <Modal visible={visible} transparent style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems:'center',
          backgroundColor: 'rgba(0,0,0,.5)',
        }}>
        <View
          style={{
            width: responsiveWidth(18),
            height: responsiveWidth(18),
            backgroundColor: 'white',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={'large'} color={'#5169F6'}/>
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
