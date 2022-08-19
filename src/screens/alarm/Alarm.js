import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

import { CustomButton } from '../../components';
import AlarmItem from './AlarmItem';

const Alarm = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [alarmList, setAlarmList] = useState([]);

    const showTimePicker = () => {
        setDatePickerVisibility(true);
    };

    const handleTimePicker = (datetime) => {
        setAlarmList((prev) => [...prev, moment(datetime).format('HH:mm')]);
        setDatePickerVisibility(false);
    };

    const hideTimePicker = () => {
        setDatePickerVisibility(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.timeList}>
                {alarmList.map((alarm, i) => (
                    <AlarmItem key={i} alarm={alarm} />
                ))}
            </View>
            <CustomButton
                title="add alarm"
                backgroundColor="#6262f9"
                onPress={showTimePicker}
            />

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleTimePicker}
                onCancel={hideTimePicker}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
    },
    timeList: {
        flex: 2,
        width: '100%',
        marginTop: 30,
    },
});

export default Alarm;
