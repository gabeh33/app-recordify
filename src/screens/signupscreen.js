import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function SignupScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoContainer}>
            <Image
                    source={require('../../assets/music_note.png')} // Path to your image
                    style={styles.logo}
                />
            </View>

            {/* Input Fields */}
            <TextInput
                placeholder="Username..."
                style={styles.input}
                placeholderTextColor="#999"
            />
            <TextInput
                placeholder="Email..."
                style={styles.input}
                placeholderTextColor="#999"
            />
            <TextInput
                placeholder="Password..."
                style={styles.input}
                placeholderTextColor="#999"
                secureTextEntry
            />

            {/* Sign Up Button */}
            <TouchableOpacity style={styles.signupButton}>
                <Text style={styles.signupButtonText}>SIGN UP</Text>
            </TouchableOpacity>

            {/* Back to Login */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()} // Navigate back to Login Screen
            >
                <Text style={styles.backButtonText}>Back to Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5e9c8', // Beige background
    },
    logoContainer: {
        marginBottom: 40,
    },
    logo: {
        fontSize: 80,
        color: '#cc6e3b', // Orange-red logo color
        transform: [{ scale: 0.25 }],
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginVertical: 10,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    signupButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#cc6e3b', // Orange-red button color
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    signupButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    backButton: {
        marginTop: 20,
    },
    backButtonText: {
        fontSize: 16,
        color: '#cc6e3b', // Orange-red text
    },
});
