import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

const Time = () => {
    const [currentTime, setCurrentTime] = useState(null);

    const getCurrentTime = () => {
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let am_pm = 'pm';

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (hour > 12) {
            hour = hour - 12;
        }

        if (hour == 0) {
            hour = 12;
        }

        setCurrentTime(`${hour - 1}:${minutes}${' '}${am_pm}`);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            getCurrentTime();
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <View>
            <Text style={styles.time}>{currentTime}</Text>
            <Text style={styles.location}>Ha Noi, Viet Nam</Text>
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
