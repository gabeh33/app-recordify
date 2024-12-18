import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/loginscreen';
import HomeScreen from './src/screens/homescreen';
import SignupScreen from './src/screens/signupscreen';
import ProfileScreen from './src/screens/profilescreen';
import TicketScreen from './src/screens/ticketscreen';
import EditProfileScreen from './src/screens/editProfilescreen';
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                
                <Stack.Screen name="Home" component={HomeScreen} />
                
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Tickets" component={TicketScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="EditProfile" component={EditProfileScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
