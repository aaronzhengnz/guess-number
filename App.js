import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

    const [selectedNumber, setSelectedNumber] = useState();

    let gameContent = <StartGameScreen />

    if (selectedNumber) {
        gameContent = <GameScreen />
    }

    return (
        <View>
            <Header title='Guess Number' />
            {gameContent}
        </View>
    );
}

const styles = StyleSheet.create({});