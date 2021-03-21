import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.inputContainer}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowRadius: 10,
        backgroundColor: 'white',
        elevation: 6,
        padding: 20,
        borderRadius: 20,
    },
});

export default Card;