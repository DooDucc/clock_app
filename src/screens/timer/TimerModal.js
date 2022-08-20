import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

import { CustomButton } from '../../components';

const TimerModal = ({ setShowModal, setTimer }) => {
    const [initTime, setInitTime] = useState({
        secs: '0',
        mins: '0',
        hours: '0',
    });
    const handleSetTimer = () => {
        // if (initTime.hours !== undefined) {
        //     setTimer((prev) => {
        //         return { ...prev, hours: initTime.hours };
        //     });
        // }
        // if (initTime.mins !== undefined) {
        //     setTimer((prev) => {
        //         return { ...prev, mins: initTime.mins };
        //     });
        // }
        // if (initTime.secs !== undefined) {
        //     setTimer((prev) => {
        //         return { ...prev, secs: initTime.secs };
        //     });
        // }

        setTimer((prev) => {
            return {
                ...prev,
                secs: initTime.secs,
                mins: initTime.mins,
                hours: initTime.hours,
            };
        });

        setShowModal(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.alarmBox}>
                    <View style={styles.field}>
                        <Text style={styles.text}>Hour</Text>
                        <TextInput
                            style={styles.input}
                            type="number"
                            keyboardType="numeric"
                            placeholder="Enter hour..."
                            placeholderTextColor="#999"
                            onChangeText={(e) =>
                                setInitTime((prev) => {
                                    return { ...prev, hours: e };
                                })
                            }
                        />
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.text}>Minutes</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            type="number"
                            placeholder="Enter minutes..."
                            placeholderTextColor="#999"
                            onChangeText={(e) =>
                                setInitTime((prev) => {
                                    return { ...prev, mins: e };
                                })
                            }
                        />
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.text}>Seconds</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            type="number"
                            placeholder="Enter second..."
                            placeholderTextColor="#999"
                            onChangeText={(e) =>
                                setInitTime((prev) => {
                                    return { ...prev, secs: e };
                                })
                            }
                        />
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <CustomButton
                        title="cancel"
                        backgroundColor="#26b3a8"
                        onPress={() => setShowModal(false)}
                    />
                    <CustomButton
                        title="set timer"
                        backgroundColor="#26b3a8"
                        onPress={handleSetTimer}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        width: '90%',
        height: '40%',
        paddingTop: 10,
        backgroundColor: '#000',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    alarmBox: {
        display: 'flex',
        paddingHorizontal: 15,
        paddingTop: 40,
        marginBottom: 50,
    },
    field: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    text: {
        color: '#fff',
        marginRight: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '50%',
        color: '#fff',
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
});

export default TimerModal;
