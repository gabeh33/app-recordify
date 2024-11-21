import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function EditProfileScreen({ navigation }) {
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    // Handle Profile Image Upload
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaType,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
    };

    // Handle Save Changes
    const handleSaveChanges = async () => {
        try {
            const token = await AsyncStorage.getItem('token'); // Get token from AsyncStorage

            if (!token) {
                Alert.alert('Error', 'You need to log in.');
                navigation.navigate('Login');
                return;
            }

            const formData = new FormData();

            // Add profile picture to the form data
            if (profileImage) {
                const fileName = profileImage.split('/').pop();
                const fileType = fileName.split('.').pop();

                formData.append('profilePicture', {
                    uri: profileImage,
                    name: fileName,
                    type: `image/${fileType}`,
                });
            }

            // Add other fields to the form data
            formData.append('bio', bio);
            formData.append('email', email);

            // Send request to the server
            const response = await axios.post(
                'https://recordify-6d6489fbb314.herokuapp.com/profile/upload',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            if (response.data.success) {
                Alert.alert('Success', 'Profile updated successfully!');
                navigation.goBack(); // Navigate back to ProfileScreen
            } else {
                Alert.alert('Error', response.data.message || 'Failed to update profile.');
            }
        } catch (error) {
            console.error('Error saving changes:', error);
            Alert.alert('Error', 'An error occurred while saving changes.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edit Profile</Text>

            {/* Profile Picture */}
            <TouchableOpacity onPress={pickImage}>
                <Image
                    source={
                        profileImage
                            ? { uri: profileImage }
                            : require('../../assets/avatar.png') // Default avatar
                    }
                    style={styles.profileImage}
                />
                <Text style={styles.changePhotoText}>Change Profile Photo</Text>
            </TouchableOpacity>

            {/* Email */}
            <TextInput
                placeholder="New Email Address"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />

            {/* Bio */}
            <TextInput
                placeholder="Edit Bio"
                style={[styles.input, styles.bioInput]}
                value={bio}
                onChangeText={setBio}
                multiline
            />

            {/* Save Changes Button */}
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
                <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>

            {/* Back to Profile */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backButtonText}>Back to Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5E9C8',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#ccc',
        alignSelf: 'center',
    },
    changePhotoText: {
        textAlign: 'center',
        color: '#1C2D5C',
        marginVertical: 10,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginVertical: 10,
        fontSize: 16,
    },
    bioInput: {
        height: 100, // Larger input for bio
        textAlignVertical: 'top',
    },
    saveButton: {
        backgroundColor: '#1C2D5C', // Dark blue
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    backButton: {
        marginTop: 20,
        alignSelf: 'center',
    },
    backButtonText: {
        color: '#1C2D5C',
        fontSize: 16,
    },
});
