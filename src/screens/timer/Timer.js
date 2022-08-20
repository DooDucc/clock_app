import { View, Text, StyleSheet, Modal, Alert } from 'react-native';
import { useState } from 'react';

import { CustomButton } from '../../components';
import TimerModal from './TimerModal';

const Timer = () => {
    const [timer, setTimer] = useState({ secs: '0', mins: '0', hours: '0' });
    const [interv, setInterv] = useState();
    const [showModal, setShowModal] = useState(false);

    const startTimer = () => {
        updateTimer();
        setInterv(setInterval(updateTimer, 1000));
    };

    const updateTimer = () => {
        if (parseInt(timer.secs) === 0) {
            if (parseInt(timer.mins) === 0) {
                if (parseInt(timer.hours) > 0) {
                    timer.hours--;
                    timer.mins = 60;
                    timer.secs = 60;
                }
            }
            if (parseInt(timer.mins) > 0) {
                timer.mins--;
                timer.secs = 60;
            }
        }

        if (parseInt(timer.secs) > 0) {
            timer.secs--;
        }

        if (parseInt(timer.secs) < 0) {
            resetTimer();
        }

        return setTimer({
            secs: timer.secs,
            mins: timer.mins,
            hours: timer.hours,
        });
    };

    const stopTimer = () => {
        clearInterval(interv);
    };

    const resetTimer = () => {
        clearInterval(interv);
        setTimer({ secs: '0', mins: '0', hours: '0' });
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
                <CustomButton
                    title="set timer"
                    backgroundColor="#26b3a8"
                    onPress={() => setShowModal(true)}
                />
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
                <CustomButton
                    title="reset"
                    backgroundColor="#26b3a8"
                    onPress={resetTimer}
                />
            </View>

            <Modal transparent={true} animationType="fade" visible={showModal}>
                <TimerModal
                    setShowModal={setShowModal}
                    setTimer={setTimer}
                    timer={timer}
                />
            </Modal>
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
    actionBtn: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

export default Timer;
