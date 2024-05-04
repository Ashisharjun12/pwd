import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal, Button} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import GoBack from '../../common/GoBack';
import SolidBtn from '../../common/SolidBtn';
import {useNavigation} from '@react-navigation/native';

const Linklist = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const questions = [
    {
      question:
        'Question 1: In a singly linked list, each node contains a reference to both the next node and the previous node?',
      answer: true,
    },
    {
      question:
        'Question 2: A circular linked list can be implemented using a singly linked list by connecting the last node to the first node?',
      answer: false,
    },
    {
      question:
        'Question 3: Adding a node at the beginning of a singly linked list requires traversal from the head to the tail?',
      answer: true,
    },
    {
      question:
        'Question 4: Deleting a node from a singly linked list, given only a reference to that node, requires traversal from the head to find the previous node?',
      answer: false,
    },
    {
      question:
        'Question 5: Doubly linked lists require more memory per node compared to singly linked lists due to the additional reference field for the previous node?',
      answer: true,
    },
  ];

  const handleTrueFalseClick = () => {
    // Increment currentIndex to paginate to the next question
    if (currentIndex === questions.length - 1) {
      // Show modal when all questions are answered
      setShowModal(true);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Calculate the initialScrollIndex based on currentIndex
  const initialScrollIndex =
    currentIndex >= questions.length ? questions.length - 1 : currentIndex;

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

      {/* Story start */}
      <View
        style={{
          width: responsiveWidth(94),
          height: responsiveHeight(40),
          backgroundColor: '#CDE8E5',
          marginLeft: responsiveWidth(2.7),
          marginTop: responsiveHeight(3),
          borderRadius: 12,
          borderWidth: 0.8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* Render current question */}
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: responsiveFontSize(2.7),
            textAlign: 'center',
            marginBottom: responsiveHeight(13),
            paddingHorizontal: responsiveWidth(5),
          }}>
          {questions[currentIndex].question}
        </Text>

        <View
          style={{
            backgroundColor: '#FF9800',
            width: '100%',
            height: responsiveHeight(5),
            color: 'white',
            fontWeight: 'bold',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: responsiveFontSize(2.6),
              color: 'white',
              fontWeight: 'bold',
            }}>
            Play a Story Game
          </Text>
        </View>

        {/* True/False buttons */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: responsiveHeight(3),
            position: 'absolute',
            top: '110%',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FFC470',
              width: responsiveWidth(45),
              height: responsiveHeight(40),
              borderRadius: 7,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: responsiveWidth(3),
              borderWidth: 0.6,
            }}
            onPress={handleTrueFalseClick}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.8),
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
              height: responsiveHeight(40),
              borderRadius: 6,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 0.6,
            }}
            onPress={handleTrueFalseClick}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.8),
                color: 'white',
                fontWeight: 'bold',
              }}>
              False
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for completion message */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.5),
                marginBottom: 20,
                textAlign: 'center',
                color: 'black',
              }}>
              Congratulations! You have completed the training.
            </Text>

            <SolidBtn
              title={'close'}
              btnstyle={{marginRight: responsiveWidth(5.5)}}
              txtbtn={{fontSize: responsiveFontSize(3)}}
              onClick={() => setShowModal(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Linklist;
