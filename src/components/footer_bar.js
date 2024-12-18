import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Footer({ navigation }) {
    return (
        <View style={styles.footerContainer}>
            {/* Background Color Bands */}
            <View style={styles.colorBand1}></View>
            <View style={styles.colorBand2}></View>
            <View style={styles.colorBand3}></View>

            {/* Icon Buttons */}
            <View style={styles.footerButtons}>
                {/* First Button */}
                <TouchableOpacity
                style={styles.iconButton}
                onPress={() => navigation.navigate('Home')} // Navigate to Home Screen
            >
                    <Text style={styles.icon}>{'🎧'}</Text>
                </TouchableOpacity>

                {/* Second Button */}
                <TouchableOpacity style={styles.iconButton}
                onPress={() => navigation.navigate('Tickets')}
                >
                    <Text style={styles.icon}>{'🎟️'}</Text>
                </TouchableOpacity>

                {/* Third Button */}
                <TouchableOpacity style={styles.iconButton}
                onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.icon}>{'👤'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        height: 120,
        width: '100%',
        position: 'relative',
    },
    colorBand1: {
        backgroundColor: '#EEAA6D',
        height: '33.33%',
        width: '100%',
    },
    colorBand2: {
        backgroundColor: '#EA703D',
        height: '33.33%',
        width: '100%',
    },
    colorBand3: {
        backgroundColor: '#D73F27',
        height: '33.33%',
        width: '100%',
    },
    footerButtons: {
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconButton: {
        width: 60,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    activeButton: {
        backgroundColor: '#1C2D5C',
    },
    icon: {
        fontSize: 24,
        color: '#D73F27',
    },
});
