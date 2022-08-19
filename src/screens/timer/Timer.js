import { View, Text, StyleSheet } from 'react-native';
import { useState, useEffect, useRef } from 'react';

import { CustomButton } from '../../components';

const Timer = () => {
    const [timer, setTimer] = useState({ secs: '10', mins: '45', hours: '0' });
    const [interv, setInterv] = useState();

    let updateS = timer.secs;
    let updateM = timer.mins;
    let updateH = timer.hours;

    const startTimer = () => {
        updateTimer();
        setInterv(setInterval(updateTimer, 1000));
    };

    const updateTimer = () => {
        if (updateM === 0) {
            updateH--;
            updateM = 60;
        }
        if (updateS === 0) {
            updateM--;
            updateS = 60;
        }
        updateS--;

        if (updateS === 0 && updateM === 0 && updateH === 0) {
            alert('Time is over');
            return;
        }
        return setTimer({ secs: updateS, mins: updateM, hours: updateH });
    };

    const stopTimer = () => {
        clearInterval(interv);
    };

    return (
        <View style={styles.container}>
            <View style={styles.time}>
                <Text style={styles.coutdown}>
                    {timer.hours >= 10 ? timer.hours : '0' + timer.hours}:
                    {timer.mins >= 10 ? timer.mins : '0' + timer.mins}:
                    {timer.secs >= 10 ? timer.secs : '0' + timer.secs}
                </Text>
            </View>
            <View style={styles.addTime}>
                <Text style={styles.addTimeText}>Setting Time</Text>
                <CustomButton title="play" backgroundColor="#26b3a8" />
            </View>
            <View style={styles.actionBtn}>
                <CustomButton
                    title="play"
                    backgroundColor="#26b3a8"
                    onPress={startTimer}
                />
                <CustomButton
                    title="pause"
                    backgroundColor="#26b3a8"
                    onPress={stopTimer}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    time: {
        flex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    coutdown: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    addTime: {
        flex: 2,
        display: 'flex',
    },
    addTimeText: {
        textAlign: 'center',
    },
    actionBtn: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

export default Timer;
