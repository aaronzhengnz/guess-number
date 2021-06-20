import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, Button, Alert, } from 'react-native';
import Card from '../components/Card';

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random()* (max - min)) + min;
    if (randomNumber === exclude) {
        return generateRandomNumber(0, 99, exclude);
    } else {
        return randomNumber;
    }
};

const GameScreen = (props) => {
    const valueLower = useRef(0);
    const valueGreater = useRef(99);
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(valueLower.current, valueGreater.current, props.chosenNumber));

    const handleButtons = (direction) => {
        if (direction === 'lower' && currentGuess < props.chosenNumber ||
            direction === 'greater' && currentGuess > props.chosenNumber) {
            Alert.alert (`You're a liar`, ' You have lied about your number please learn to count', [{ text: `I'm sorry! I will study hard`}] )
        } else {
            if (direction === 'lower') {
                valueLower.current = currentGuess;
            } else {
                valueGreater.current = currentGuess;
            }
            const newValue = generateRandomNumber(valueLower.current, valueGreater.current, currentGuess)
            setCurrentGuess(newValue)
        }
    }

    return (
        <View style={styles.container}>
            <Text>Opponent's Guess - {currentGuess}</Text>
            <Card style={styles.buttonContainer}>
                <Button title="Greater" onPress={() => handleButtons('greater')}/>
                <Button title="Lower" onPress={() => handleButtons('lower')}/>
            </Card>
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
    buttonContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
        marginTop: 10,
    }
});

export default GameScreen;