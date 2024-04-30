import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Story_Telling = () => {
    return (
        <View style={{
            margin: 15,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 30,
            marginTop: 29
        }}>
            <View style={{
                backgroundColor: 'blue',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                width: 150
            }}>
                <Text style={{
                    fontWeight: '800',
                    fontSize: 20,
                    color: 'white'
                }}>Lion and Rat</Text>
            </View>
            <View style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 13,
                width: 330,
                backgroundColor: '#85C0F9',
                borderRadius: 10

            }}>
                <Text style={{
                    fontSize: 18,
                    color: 'white',
                    lineHeight: 25,
                    letterSpacing: 1.2
                }}>A Lion lay asleep in the
                    forest, his great head
                    resting on his paws. A timid
                    little Mouse came upon him
                    unexpectedly, and in her
                    fright and haste to get
                    away.
                </Text>
            </View>
            <View style={{
                width: '100%',
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: 'orange',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20%'
            }}>
                <Text style={{
                    fontSize: 18,
                    color: 'white',
                    fontWeight: 'bold'
                }}>
                    Play a story Quiz.
                </Text>
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 10
            }}>
                <TouchableOpacity style={{
                    backgroundColor: 'green',
                    width: '45%',
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '90%'
                }}>
                    <Text style={{
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 30
                    }}>
                        Yes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: 'red',
                    width: '45%',
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '90%'
                }}>
                    <Text style={{
                        color: 'white',
                        fontWeight: '600',
                        fontSize: 30
                    }}>
                        No
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Story_Telling;