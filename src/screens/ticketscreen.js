// Middle screen, middle button with ticket icon in the nav bar 
import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import Footer from '../components/Footer_bar';

export default function TicketScreen( {navigation}) {
        // Information needed on this screen from the server: 
        // List of tickets, with their current price
        // 

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <TextInput
                    placeholder="Search Artist..."
                    placeholderTextColor="#999"
                    style={styles.searchBar}
                />
            </View>

            {/* Balance Section */}
            <View style={styles.balanceSection}>
                <Text style={styles.balanceText}>$X,XXX.XX</Text>
            </View>

            {/* Graph Section */}
            <View style={styles.graphSection}>
                {/* Replace with a graph library like react-native-chart-kit or an image */}
                <Text style={styles.graphPlaceholder}>[Graph Placeholder]</Text>
            </View>

            {/* Tickets Section */}
            <ScrollView contentContainerStyle={styles.ticketsContainer}>
                <Text style={styles.sectionTitle}>My Tickets</Text>

                {/* Ticket Item 1 */}
                <View style={styles.ticketItem}>
                    <Image
                        source={require('../../assets/ticket_blue.png')} // Replace with your ticket image
                        style={styles.ticketIcon}
                    />
                    <View style={styles.ticketDetails}>
                        <Text style={styles.ticketName}>DRKE</Text>
                        <Text style={styles.ticketGraph}>[Graph Placeholder]</Text>
                    </View>
                    <Text style={styles.ticketPrice}>$247.66</Text>
                </View>

                {/* Ticket Item 2 */}
                <View style={styles.ticketItem}>
                    <Image
                        source={require('../../assets/ticket_yellow.png')} // Replace with your ticket image
                        style={styles.ticketIcon}
                    />
                    <View style={styles.ticketDetails}>
                        <Text style={styles.ticketName}>TSWF</Text>
                        <Text style={styles.ticketGraph}>[Graph Placeholder]</Text>
                    </View>
                    <Text style={styles.ticketPrice}>$419.72</Text>
                </View>

                {/* Ticket Item 3 */}
                <View style={styles.ticketItem}>
                    <Image
                        source={require('../../assets/ticket_purple.png')} // Replace with your ticket image
                        style={styles.ticketIcon}
                    />
                    <View style={styles.ticketDetails}>
                        <Text style={styles.ticketName}>NOKA</Text>
                        <Text style={styles.ticketGraph}>[Graph Placeholder]</Text>
                    </View>
                    <Text style={styles.ticketPrice}>$181.35</Text>
                </View>
            </ScrollView>

            {/* Footer Section */}
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
    balanceSection: {
        alignItems: 'center',
        marginVertical: 10,
    },
    balanceText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    graphSection: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    graphPlaceholder: {
        fontSize: 16,
        color: '#999',
    },
    ticketsContainer: {
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    ticketItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    ticketIcon: {
        width: 40,
        height: 40,
        borderRadius: 5,
        marginRight: 10,
    },
    ticketDetails: {
        flex: 1,
    },
    ticketName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    ticketGraph: {
        fontSize: 12,
        color: '#999',
    },
    ticketPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
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
    activeButton: {
        backgroundColor: '#1C2D5C',
    },
    footerIcon: {
        fontSize: 24,
        color: '#1C2D5C',
    },
});
