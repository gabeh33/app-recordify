import React from 'react';
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

export default function SignupScreen({ navigation }) {
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
        color: '#cc6e3b', // Orange-red text
    },
});
