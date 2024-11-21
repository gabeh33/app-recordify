import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Keyboard,
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native';
import axios from 'axios';

const { height } = Dimensions.get('window');

export default function SignupScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [feedback, setFeedback] = useState(''); // Feedback message for success or error
    const [isSubmitting, setIsSubmitting] = useState(false); // Prevent multiple submissions

    const handleSignup = async () => {
        setFeedback(''); // Clear previous feedback
        setIsSubmitting(true);

        try {
            const response = await axios.post('https://recordify-6d6489fbb314.herokuapp.com/auth/signup', {
                username,
                email,
                password,
            });

            if (response.data.success) {
                setFeedback('Signup successful! Redirecting to login...');
                setTimeout(() => {
                    navigation.navigate('Login'); // Redirect after 2 seconds
                }, 2000);
            } else {
                setFeedback(response.data.message || 'Signup failed. Please try again.');
            }
        } catch (error) {
            if (error.response) {
                setFeedback(error.response.data.message || 'An error occurred.');
            } else if (error.request) {
                setFeedback('No response from server. Check your network.');
            } else {
                setFeedback('An unexpected error occurred.');
            }
        } finally {
            setIsSubmitting(false);
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

                {/* Input Fields */}
                <View style={styles.formContainer}>
                    <TextInput
                        placeholder="Username..."
                        style={styles.input}
                        placeholderTextColor="#999"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        placeholder="Email..."
                        style={styles.input}
                        placeholderTextColor="#999"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        placeholder="Password..."
                        style={styles.input}
                        placeholderTextColor="#999"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />

                    {/* Feedback Message */}
                    {feedback ? (
                        <Text
                            style={
                                feedback.includes('successful')
                                    ? styles.success
                                    : styles.error
                            }
                        >
                            {feedback}
                        </Text>
                    ) : null}

                    {/* Sign Up Button */}
                    <TouchableOpacity
                        style={[
                            styles.signupButton,
                            isSubmitting && { opacity: 0.5 },
                        ]}
                        onPress={handleSignup}
                        disabled={isSubmitting} // Disable button while submitting
                    >
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
        justifyContent: 'center',
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
    backButton: {
        marginTop: 20,
    },
    backButtonText: {
        fontSize: 16,
        color: '#cc6e3b',
    },
    error: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
    },
    success: {
        color: 'green',
        marginBottom: 10,
        textAlign: 'center',
    },
});
