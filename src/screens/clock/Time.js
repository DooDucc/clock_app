import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

import formatDate from './formatDate';

const Time = () => {
    const [currentTime, setCurrentTime] = useState(null);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();

            setCurrentTime(formatDate(now));
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <View>
            <Text style={styles.time}>{currentTime}</Text>
            <Text style={styles.location}>Viet Nam</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    time: {
        fontSize: 45,
        fontWeight: 'bold',
    },
    location: { fontWeight: 'bold', textAlign: 'center' },
});

export default Time;
