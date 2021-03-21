import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
    return (
        <View>
            <Header title='Guess Number' />
            <StartGameScreen />
        </View>
    );
}

const styles = StyleSheet.create({});