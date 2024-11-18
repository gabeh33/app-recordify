import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Handle Login
    const handleLogin = async () => {
        try {
            const response = await axios.post('https://recordify-6d6489fbb314.herokuapp.com/auth/login', {
                'username': username,
                'password': password,
            });
            
            console.log(response.data);
            if (response.data.success) {
                // Save token to AsyncStorage
                await AsyncStorage.setItem('token', response.data.token);

                // Navigate to Home screen
                navigation.navigate('Home');
            } else {
                setError(response.data.message || 'Login failed.');
            }
        } catch (err) {
            // Axios error handling
            if (err.response) {
                // Server responded with a status code not in the range 2xx
                setError(err.response.data.message || 'An error occurred.');
            } else if (err.request) {
                // No response received
                setError('No response from server. Check your network.');
            } else {
                // Something else went wrong
                setError('An unexpected error occurred.');
        }
        }
    };

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
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                placeholder="Password..."
                style={styles.input}
                placeholderTextColor="#999"
                secureTextEntry
                value={password} // This binds the input value to the state
                onChangeText={(text) => setPassword(text)} // Updates state when the user types
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}

            {/* Login Button */}
            <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin} // Navigate to Home Screen
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
