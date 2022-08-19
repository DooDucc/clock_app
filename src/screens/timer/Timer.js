import { View, Text, StyleSheet, Modal } from 'react-native';
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

    let updateM = timer.mins,
        updateS = timer.secs,
        updateH = timer.hours;

    const updateTimer = () => {
        // if(timer.secs === 0) {
        //     if()
        // }
        if (updateM === 0 && updateS === 0) {
            updateH--;
            updateM = 60;
        }
        if (updateS === 0 && updateM > 0) {
            updateM--;
            updateS = 60;
        }
        updateS--;

        // if (updateS === 0 && updateM === 0 && updateH === 0) {
        //     alert('Time is over');
        //     stopTimer();
        // } else {
        // }
        return setTimer({
            secs: updateS,
            mins: updateM,
            hours: updateH,
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
                    title="init timer"
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
