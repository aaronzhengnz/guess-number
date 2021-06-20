import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import GameScreen from './GameScreen';

const StartGameScreen = (props) => {
    const minimumValue = 1;
    const maximumValue = 99;
    const [cleanedValue, setCleanedValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [savedValue, setSavedValue] = useState(0);

    const handleTouchablePress = () => {
        Keyboard.dismiss();
    };

    const handleUserInputChange = (inputValue) => {
        setCleanedValue(inputValue.replace(/[^0-9]/g, ''));
    };

    const buttonReset = () => {
        setCleanedValue('');
        setConfirmed(false);
        setSavedValue(0);
    };

    const buttonConfirm = () => {
        const value = parseInt(cleanedValue);

        if (isNaN(value) || value < minimumValue || value > maximumValue) {
            Alert.alert('The number is not valid',
                `number must be between ${minimumValue} and ${maximumValue}`,
                [
                    {
                        text: 'OK',
                        style: 'destructive',
                        onPress: () => {
                            setCleanedValue('');
                        },
                    },
                ]
            );
        }
        else {
            setConfirmed(true);
            setSavedValue(value);
            setCleanedValue('');
            Keyboard.dismiss();
        }
    };

    let confirmOutput;

    if (confirmed) {
        confirmOutput = (
            <Card>
                <Text style={styles.value}>Your Selected Number is:</Text>
                <NumberContainer>{savedValue}</NumberContainer>
                <View>
                    <Button color="rgb(235, 125, 252)" title="Start Game" onPress={() => {}} ></Button>
                </View>
            </Card>
        );
    }

    let startGameContent = (
        <TouchableWithoutFeedback onPress={handleTouchablePress}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game</Text>
                <Card>
                    <Text>Select a number</Text>
                    <Input
                        keyboardType="number-pad"
                        maxLength={2}
                        blurOnSubmit
                        autoFocus
                        textAlign="center"
                        multiLine
                        onChangeText={handleUserInputChange}
                        value={cleanedValue}
                        style={styles.Input}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title='Reset' onPress={buttonReset} color="red"></Button>
                        <Button title='Confirm' onPress={buttonConfirm} color='rgb(52, 235, 64)' ></Button>
                    </View>
                </Card>
                {confirmOutput}
            </View>
        </TouchableWithoutFeedback>
    );

    if (savedValue) {
        startGameContent = <GameScreen/>;
    }

    return startGameContent;
};


const styles = StyleSheet.create({
    screen: {
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    Input: {
        paddingTop: 10,
        width: '20%',
        fontSize: 20,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgb(52, 174, 235)'
    },

});

export default StartGameScreen;
