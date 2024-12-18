import React from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, } from 'react-native';
import { PiMagnifyingGlass } from '@expo/vector-icons';

 const SearchBar = ({placeholder, value, onChangeText, onSearch }) => {
    return (
        <View style={styles.container}>
            
            <TouchableOpacity onPress={onSearch}>
                <PiMagnifyingGlass size={24} color="#888" style={styles.icon} />
            </TouchableOpacity>

            <TextInput 
            style={styles.input}
            placeholder={placeholder || "Search..."}
            value={value}
            onChange={onChangeText}
            placeholderTextColor="#aaa"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        paddingHorizontal: 12,
        height: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2, // For Android shadow
        marginHorizontal: 10,
      },
      icon: {
        width: 20,
        height: 20,
        tintColor: '#888',
      },
      input: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 16,
        color: '#333',
      },
});
export default SearchBar;

