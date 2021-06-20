import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgb(52, 235, 64)'
    },
    number: {
        fontSize: 20,
        color: 'rgb(235, 125, 252)'
    }
});

export default NumberContainer;