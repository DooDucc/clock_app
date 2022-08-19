import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import StopWatchTime from './StopWatchTime';

const LapItem = ({ turn, interval }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.turn}>Lap {turn}</Text>
            <StopWatchTime interval={interval} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 10,
    },
    turn: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    time: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default LapItem;
