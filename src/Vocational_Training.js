import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const Vocational_Training = () => {
    return (
        <View style={{
            marginVertical: 10,
            display: 'flex',
            flexDirection: 'column',
            marginHorizontal: 13,
            width: '100%',
            height:'100%',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'start',
                    gap: 8,
                }}>
                <TouchableOpacity style={[styles.container, { backgroundColor: '#601A4A' }]}>
                    <Text style={styles.text}>Technical Course</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.container, { backgroundColor: '#EE442F' }]}>
                    <Text style={styles.text}>Non-Technical Course</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.container, { backgroundColor: '#63ACBE' }]}>
                    <Text style={styles.text}>Story Telling</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{
                zIndex: 99,
                backgroundColor: '#85C0F9',
                width: 80,
                borderRadius: 100,
                height: 80,
                padding: 4,
                position: 'absolute',
                bottom: 10,
                alignSelf: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontWeight: '800',
                    color: 'white'
                }}>Alan AI</Text>
            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        width: '45%',
        height: '48%',
        backgroundColor: 'red',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding:5
    },
    text: {
        color: 'white',
        fontWeight: '800',
        fontSize: 20,
        textAlign: 'center',
    },
});
export default Vocational_Training;
