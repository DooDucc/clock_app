import { View, StyleSheet } from 'react-native';
import { useState, useRef, useEffect } from 'react';

import { CustomButton } from '../../components';
import StopWatchTime from './StopWatchTime';
import LapList from './LapList';

let timeId = null;

const StopWatch = () => {
    const [timer, setTimer] = useState({ start: 0, now: 0, laps: [] });

    const startStopWatch = () => {
        const currentTime = new Date().getTime();
        timeId = setInterval(() => {
            setTimer((prev) => {
                return {
                    ...prev,
                    start: currentTime,
                    now: new Date().getTime(),
                };
            });
        }, 100);
    };

    const stopStopWatch = () => {
        clearInterval(timeId);
        setTimer({ start: 0, now: 0, laps: [] });
    };

    const lapStopWatch = () => {
        const [firstLap, ...rest] = timer.laps;
        setTimer({
            ...timer,
            laps: [0, timer.now - timer.start, ...rest],
        });
    };

    useEffect(() => {
        return () => clearInterval(timeId);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.time}>
                <StopWatchTime interval={timer.now - timer.start} />
            </View>
            <View style={styles.listTime}>
                <LapList laps={timer.laps} currentTime={timer} />
            </View>
            <View style={styles.actionBtn}>
                <CustomButton
                    title="start"
                    backgroundColor="#fc8827"
                    onPress={startStopWatch}
                />
                <CustomButton
                    title="stop"
                    backgroundColor="#fc8827"
                    onPress={stopStopWatch}
                />
                <CustomButton
                    title="lap"
                    backgroundColor="#fc8827"
                    onPress={lapStopWatch}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    time: {
        flex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listTime: {
        flex: 2,
        width: '100%',
        height: 200,
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    actionBtn: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

export default StopWatch;
