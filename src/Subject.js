import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Subject = () => {
    return (
        <View style={{
            margin: 15,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 30,
            marginTop:29
        }}>
            <View style={{
                backgroundColor: 'blue',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                width: 100
            }}>
                <Text style={{
                    fontWeight: '800',
                    fontSize: 20,
                    color: 'white'
                }}>C</Text>
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
                }}>C is a general-purpose programming language that is extremely popular, simple, and flexible to use. It is a structured programming language that is machine-independent and extensively used to write various applications, Operating Systems like Windows, and many other complex programs like Oracle database, Git, Python interpreter, and more.</Text>
            </View>
            <View style={{
                width: '100%',
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: 'orange',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{
                    fontSize: 18,
                    color: 'white',
                    fontWeight: 'bold'
                }}>
                    Play a Tech Quiz.
                </Text>
            </View>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent:'center',
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
                    height:'70%'
                }}>
                    <Text style={{
                        color:'white',
                        fontWeight:'600',
                        fontSize:30
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
                    height:'70%'
                }}>
                    <Text style={{
                        color:'white',
                        fontWeight:'600',
                        fontSize:30
                    }}>
                        No
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Subject