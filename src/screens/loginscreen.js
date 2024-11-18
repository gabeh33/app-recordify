import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
    Platform,
    Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window'); // Get screen height for dynamic styling

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Handle Login
    const handleLogin = async () => {
        try {
            const response = await axios.post('https://recordify-6d6489fbb314.herokuapp.com/auth/login', {
                username,
                password,
            });

            if (response.data.success) {
                await AsyncStorage.setItem('token', response.data.token);
                navigation.navigate('Home');
            } else {
                setError(response.data.message || 'Login failed.');
            }
        } catch (err) {
            if (err.response) {
                setError(err.response.data.message || 'An error occurred.');
            } else if (err.request) {
                setError('No response from server. Check your network.');
            } else {
                setError('An unexpected error occurred.');
            }
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            {/* Logo Section */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/music_note.png')}
                    style={styles.logo}
                />
            </View>

            {/* Input Fields and Buttons */}
            <View style={styles.formContainer}>
                <TextInput
                    placeholder="Username..."
                    style={styles.input}
                    placeholderTextColor="#999"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    placeholder="Password..."
                    style={styles.input}
                    placeholderTextColor="#999"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                {error ? <Text style={styles.error}>{error}</Text> : null}

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>LOG IN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.signupButton}
                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text style={styles.signupButtonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5e9c8',
    },
    logoContainer: {
        height: height * 0.2, // 20% of the screen height
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 20, // Space between logo and form
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    formContainer: {
        height: height * 0.5, // 50% of the screen height
        justifyContent: 'center', // Space out inputs and buttons
        alignItems: 'center',
        paddingHorizontal: 20,
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
        backgroundColor: '#cc6e3b',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
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
        backgroundColor: '#ffffff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#cc6e3b',
        marginTop: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    signupButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#cc6e3b',
    },
    error: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
});
