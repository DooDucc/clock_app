import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addAlarm } from '../../redux/actions';
import { CustomButton } from '../../components';

const AlarmModal = ({ setShowModal }) => {
    const [hour, setHour] = useState('');
    const [minutes, setMinutes] = useState('');
    const [action, setAction] = useState('');

    const dispatch = useDispatch();

    const handleAddAlarm = () => {
        if (
            Number.isInteger(parseInt(hour)) === true &&
            Number.isInteger(parseInt(hour)) > 0 &&
            Number.isInteger(parseInt(hour)) <= 24 &&
            Number.isInteger(parseInt(minutes)) === true &&
            Number.isInteger(parseInt(minutes)) > 0 &&
            Number.isInteger(parseInt(minutes)) <= 60
        ) {
            dispatch(
                addAlarm({
                    hour: hour,
                    minutes: minutes,
                    action: action,
                }),
            );
        } else {
            alert('Please enter valid value');
        }

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
                            keyboardType="numeric"
                            placeholder="Enter hour..."
                            placeholderTextColor="#999"
                            onChangeText={(e) => setHour(e)}
                        />
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.text}>Minutes</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            placeholder="Enter minutes..."
                            placeholderTextColor="#999"
                            onChangeText={(e) => setMinutes(e)}
                        />
                    </View>
                    <View style={styles.field}>
                        <Text style={styles.text}>Action</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            placeholder="Enter action..."
                            placeholderTextColor="#999"
                            onChangeText={(e) => setAction(e)}
                        />
                    </View>
                </View>
                <CustomButton title="set alarm" backgroundColor="#6262f9" onPress={handleAddAlarm} />
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
});

export default AlarmModal;
