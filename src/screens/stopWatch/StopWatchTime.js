import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import moment from 'moment';

import formatTime from 'minutes-seconds-milliseconds';

const StopWatchTime = ({ interval }) => {
    const pad = (n) => (n < 10 ? '0' + n : n);
    const duration = moment.duration(interval);
    const centiseconds = Math.floor(duration.milliseconds() / 10);
    return (
        <View style={styles.container}>
            <Text style={styles.time}>{pad(duration.hours())}:</Text>
            <Text style={styles.time}>{pad(duration.minutes())}:</Text>
            <Text style={styles.time}>{pad(duration.seconds())}:</Text>
            <Text style={styles.time}>{pad(centiseconds)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    time: {
        fontSize: 40,
        fontWeight: 'bold',
    },
});

export default StopWatchTime;
