import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import { responsiveWidth } from 'react-native-responsive-dimensions';

const Workshop = () => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: responsiveWidth(95),
            margin: 10,
            gap: 10
        }}>
            <View style={styles.container}>
                <View style={{ display: 'flex', gap: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.position}>DSA</Text>
                    <Text style={styles.teacher}>Sir Yash Raj</Text>
                </View>
                <TouchableOpacity style={styles.solidBtn}>
                    <Text style={{ color: 'white' }}>Attend</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={{ display: 'flex', gap: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.position}>Web Development</Text>
                    <Text style={styles.teacher}>Sir Ashish Raj</Text>
                </View>
                <TouchableOpacity style={styles.solidBtn}>
                    <Text style={{ color: 'white' }}>Attend</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E6E6FA',
        width: '100%',
        padding: 10,
        borderRadius: 8,
        display: 'flex',
        gap: 5
    },
    position: {
        color: 'black',
        fontSize: 22,
        fontWeight: '700'
    },
    teacher: {
        color: 'black',
        fontSize: 17,
        fontWeight: '500'
    },
    solidBtn: {
        backgroundColor: '#0a66c2',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#0a66c2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        marginLeft: '70%',
        marginTop: 10
    }
})

export default Workshop