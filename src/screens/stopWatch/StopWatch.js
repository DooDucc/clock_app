import { View, StyleSheet } from 'react-native';
import { useState, useRef, useEffect } from 'react';

import { CustomButton } from '../../components';
import StopWatchTime from './StopWatchTime';
import LapList from './LapList';

const StopWatch = () => {
    const [start, setStart] = useState(0);
    const [now, setNow] = useState(0);
    const [lapList, setLapList] = useState([]);

    let timer = now - start;

    const startStopWatch = () => {
        const currentTime = new Date().getTime();
        setStart(currentTime);
        setNow(currentTime);
        setLapList([0]);
        timer = setInterval(() => {
            setNow(new Date().getTime());
        }, 100);
    };

    const stopStopWatch = () => {
        clearInterval(timer);
        const [firstlap, ...rest] = lapList;
        setStart(0);
        setNow(0);
        setLapList([firstlap + now - start, ...rest]);
    };

    const lapStopWatch = () => {
        const tmpTime = new Date().getTime();
        const [firstLap, ...rest] = lapList;
        setLapList([0, firstLap + now - start, ...rest]);
        setStart(tmpTime);
        setNow(tmpTime);
    };

    return (
        <View style={styles.container}>
            <View style={styles.time}>
                <StopWatchTime
                    interval={lapList.reduce((a, b) => a + b, 0) + timer}
                />
            </View>
            <View style={styles.listTime}>
                <LapList lapList={lapList} timer={timer} />
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
