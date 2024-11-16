import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            {/* Search Icon */}
            <View style={styles.header}>
                <Text style={styles.searchIcon}>🔍</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
                <Text style={styles.text}>Full Screen{"\n"}Scrollable Content</Text>
            </View>

            {/* Footer Navigation */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.iconContainer}>
                    <Text style={styles.icon}>🎵</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Text style={styles.icon}>🎟️</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Text style={styles.icon}>👤</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5e9c8', // Beige background
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 20,
    },
    searchIcon: {
        fontSize: 24,
        color: '#333',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#cc8961', // Orange footer background
        height: 80,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#1c2d5c', // Dark blue background
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 24,
        color: '#ffffff',
    },
});
