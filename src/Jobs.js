import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import { responsiveWidth } from 'react-native-responsive-dimensions';

const Jobs = () => {
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
                <View style={{display:'flex', gap:8}}>
                    <Text style={styles.position}>Web Developer</Text>
                    <Text style={styles.company}>Physics Wallah</Text>
                    <Text style={styles.location}>Patna</Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 10,
                    justifyContent: 'space-between',
                    borderTopWidth: 1,
                    borderColor: '#8c8c8c99',
                }}>
                    <TouchableOpacity style={styles.hollowBtn}>
                        <Text style={{ color: 'black' }}>View Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.solidBtn}>
                        <Text style={{ color: 'white' }}>Apply</Text>
                    </TouchableOpacity>
                </View>
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
        display:'flex',
        gap:5
    },
    position: {
        color: 'black',
        fontSize: 22,
        fontWeight: '700'
    },
    company: {
        color: 'black',
        fontSize: 17,
        fontWeight: '500'
    },
    location: {
        color: 'black',
        fontSize: 14,
        fontWeight: '300'
    },
    hollowBtn: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#0a66c2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 100
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
        width: 100
    }
})

export default Jobs