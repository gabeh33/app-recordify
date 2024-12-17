// Leftmost screen, bottom left on the navigation bar
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer_bar';


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Search Icon */}
            <View style={styles.header}>
                <Text style={styles.searchIcon}>{'🔍'}</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
                <Text style={styles.text}>Full Screen{"\n"}Scrollable Content</Text>
            </View>

            {/* Footer Navigation */}
            <Footer navigation={navigation}/>
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
});
