import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Footer from '../components/Footer_bar';

export default function ProfileScreen( {navigation}) {
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
                    source={require('../../assets/avatar.png')} // Replace with your avatar image
                    style={styles.avatar}
                />

                {/* Username and Info */}
                <View style={styles.userInfo}>
                    <Text style={styles.username}>@JESSE</Text>
                    <Text style={styles.userDetails}>Music Enthusiast 🎵</Text>
                    <Text style={styles.groupies}>1,001 Groupies 🌟</Text>
                </View>
            </View>

            {/* Bio Section */}
            <Text style={styles.bio}>
                One sentence about you, your music taste, or a hot take in the music world.
            </Text>

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

            {/* Footer Navigation */}
            <Footer navigation={navigation}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5E9C8',
    },
    header: {
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
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 80,
        backgroundColor: '#D73F27',
    },
    footerButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerIcon: {
        fontSize: 24,
        color: '#1C2D5C',
    },
});
