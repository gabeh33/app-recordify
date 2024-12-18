// Rightmost screen, bottom right on the navigation bar
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
    Alert,
} from 'react-native';
import Footer from '../components/footer_bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function ProfileScreen({ navigation }) {
    const [userData, setUserData] = useState(null); // Holds user-specific data
    const [profilePicture, setProfilePicture] = useState(null);
    const [loading, setLoading] = useState(true);

    // Validate token and fetch user data
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                // Get token from AsyncStorage
                const token = await AsyncStorage.getItem('token');
                
                if (!token) {
                    Alert.alert('Error', 'You need to log in.');
                    console.log("Unable to find token, is the user logged in?");
                    navigation.navigate('Login');
                    return;
                }

                // Validate token and fetch user data
                const response = await axios.get(
                    'https://recordify-6d6489fbb314.herokuapp.com/profile',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.data.success) {
                    console.log("Successfully validated token, attempting to get user data:");
                    console.log(response.data);
                    setUserData(response.data.user); // Update state with user data
                
                } else {
                    Alert.alert('Error', response.data.message || 'Unauthorized access');
                    navigation.navigate('Login');
                }
            } catch (error) {
                Alert.alert(
                    'Error',
                    error.response?.data?.message || 'Unable to fetch user data.'
                );
                navigation.navigate('Home');
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
    }, [navigation]);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (!userData) {
        return null; // Render nothing if no user data is available
    }

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <TextInput
                    placeholder="Search Profile..."
                    placeholderTextColor="#999"
                    style={styles.searchBar}
                />
            </View>

            {/* Profile Section */}
            <View style={styles.profileSection}>
                {/* Avatar */}
                <Image
                    source={
                        profilePicture
                            ? { uri: profilePicture }
                            : require('../../assets/avatar.png') // Fallback avatar
                    }
                    style={styles.avatar}
                />

                {/* Username and Info */}
                <View style={styles.userInfo}>
                    <Text style={styles.username}>@{userData.username}</Text>
                    <Text style={styles.userDetails}>{userData.bio || 'No bio available.'}</Text>
                    <Text style={styles.groupies}>{userData.groupies} Groupies 🌟</Text>
                </View>
            </View>

            {/* Bio Section */}
            <Text style={styles.bio}>{userData.bio || 'Tell us something about yourself!'}</Text>

            {/* Main Content */}
            <ScrollView contentContainerStyle={styles.mainContent}>
                {/* Collection */}
                <Text style={styles.sectionTitle}>Collection</Text>
                <View style={styles.collection}>
                    <View style={[styles.collectionItem, { backgroundColor: '#6DA3FF' }]} />
                    <View style={[styles.collectionItem, { backgroundColor: '#AA6DFF' }]} />
                    <View style={[styles.collectionItem, { backgroundColor: '#FFC76D' }]} />
                </View>

                {/* Ratings & Review */}
                <Text style={styles.sectionTitle}>Ratings & Review:</Text>
                <Text style={styles.sectionDescription}>
                    Out of 10 ratings of albums, written reviews, etc.
                </Text>

                {/* Notes */}
                <Text style={styles.sectionTitle}>Notes:</Text>
                <Text style={styles.sectionDescription}>
                    Like tweets, Notes are short text blurbs tied to an album, song, artist, or genre.
                </Text>

                {/* Lists */}
                <Text style={styles.sectionTitle}>Lists:</Text>
                <Text style={styles.sectionDescription}>
                    Curate opinionated lists for things like best AOTYs, an artist’s song/album rankings, mood playlists.
                </Text>

                {/* Aura */}
                <Text style={styles.sectionTitle}>Aura:</Text>
                <Text style={styles.sectionDescription}>
                    Showcase 3-5 songs that depict your aura - choose one to play while people visit your profile.
                </Text>
            </ScrollView>

            {/* Edit Profile Button */}
            <TouchableOpacity
                style={styles.editProfileButton}
                onPress={() => navigation.navigate('EditProfile')}
            >
                <Text style={styles.editProfileButtonText}>Edit Profile</Text>
            </TouchableOpacity>

            {/* Footer Navigation */}
            <Footer navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5E9C8',
    },
    header: {
        paddingTop: 75,
        padding: 20,
        alignItems: 'center',
    },
    searchBar: {
        width: '90%',
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingHorizontal: 15,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#6DA3FF',
    },
    userInfo: {
        marginLeft: 15,
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    userDetails: {
        fontSize: 14,
        color: '#555',
    },
    groupies: {
        fontSize: 14,
        color: '#555',
    },
    bio: {
        paddingHorizontal: 20,
        fontSize: 14,
        color: '#777',
        marginBottom: 20,
    },
    mainContent: {
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
    sectionDescription: {
        fontSize: 14,
        color: '#777',
        marginBottom: 15,
    },
    collection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    collectionItem: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    editProfileButton: {
        margin: 20,
        padding: 15,
        backgroundColor: '#1C2D5C', // Dark blue
        borderRadius: 10,
        alignItems: 'center',
    },
    editProfileButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
