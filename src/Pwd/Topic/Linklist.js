import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import GoBack from '../../common/GoBack';
import { Question } from '../../Utils/Question.js';
import QuestionCont from './QuestionCont.js';

const Linklist = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTrueFalseClick = () => {
    // Increment currentIndex to paginate to the next question
    setCurrentIndex(currentIndex + 1);
  };

  // Calculate the initialScrollIndex based on currentIndex
  const initialScrollIndex =
    currentIndex >= Question.length ? Question.length - 1 : currentIndex;

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
            marginLeft: responsiveWidth(12),
            color: 'black',
            fontWeight: '500',
          }}>
          Linklist StoryTelling
        </Text>
      </View>

      {/* story start */}

      <View
        style={{
          width: responsiveWidth(94),
          height: responsiveHeight(40),
          backgroundColor: '#CDE8E5',
          marginLeft: responsiveWidth(2.7),
          marginTop: responsiveHeight(3),
          borderRadius: 12,
          borderWidth: 0.8,
        }}>
        {/* questions coming soon */}

        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={Question}
          renderItem={({index, item}) => {
            return (
              <View>
                <View
                  style={{
                    marginTop: responsiveHeight(6),
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: responsiveFontSize(2.7),
                      marginLeft: responsiveWidth(1.8),
                      marginRight: responsiveWidth(17),
                    }}>
                    {item.question}
                  </Text>
                </View>
                <View style={{marginTop: responsiveHeight(7)}}>
                  <Text
                    style={{
                      color: '#8576FF',
                      fontSize: responsiveFontSize(3.5),
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginRight: responsiveWidth(15),
                    }}>
                    Play a Story Quiz
                  </Text>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          initialScrollIndex={initialScrollIndex} // Set initialScrollIndex
        />
      </View>

      {/* true false */}

      <View style={{flexDirection: 'row', marginTop: responsiveHeight(3)}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFC470',
            width: responsiveWidth(45),
            height: responsiveHeight(38),
            marginTop: responsiveHeight(4),
            marginLeft: responsiveWidth(3),
            borderRadius: 17,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={handleTrueFalseClick}>
          <Text
            style={{
              fontSize: responsiveFontSize(3.8),
              color: 'white',
              fontWeight: 'bold',
            }}>
            True
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#4793AF',
            width: responsiveWidth(45),
            height: responsiveHeight(38),
            marginTop: responsiveHeight(4),
            marginLeft: responsiveWidth(3),
            borderRadius: 17,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={handleTrueFalseClick}>
          <Text
            style={{
              fontSize: responsiveFontSize(3.8),
              color: 'white',
              fontWeight: 'bold',
            }}>
            False
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Linklist;
