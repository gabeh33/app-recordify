import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoContainer}>
                <Text style={styles.logo}>🎵</Text>
            </View>

            {/* Input Fields */}
            <TextInput
                placeholder="Username..."
                style={styles.input}
                placeholderTextColor="#999"
            />
            <TextInput
                placeholder="Password..."
                style={styles.input}
                placeholderTextColor="#999"
                secureTextEntry
            />

            {/* Login Button */}
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate('Home')} // Navigate to Home Screen
            >
                <Text style={styles.loginButtonText}>LOG IN</Text>
            </TouchableOpacity>

            {/* Sign Up Button */}
            <TouchableOpacity
                style={styles.signupButton}
                onPress={() => navigation.navigate('Signup')} // Navigate to Signup Screen
            >
                <Text style={styles.signupButtonText}>SIGN UP</Text>
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
    loginButton: {
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
    loginButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    signupButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#ffffff', // White background
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#cc6e3b', // Orange-red border
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    signupButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#cc6e3b', // Orange-red text color
    },
});
