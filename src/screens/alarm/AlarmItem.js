import { View, Text, StyleSheet, Switch } from 'react-native';
import { useState } from 'react';

const AlarmItem = ({ alarm }) => {
    const [switchValue, setSwitchValue] = useState(true);

    const toggleSwitch = (value) => {
        setSwitchValue(value);
    };

    return (
        <View>
            <View style={styles.alarmItem}>
                <View>
                    <Text style={styles.time}>{alarm}</Text>
                    {/* <Text style={styles.action}>{action}</Text> */}
                </View>
                <Switch
                    value={switchValue}
                    onValueChange={toggleSwitch}
                    trackColor={{ false: '#767577', true: '#6262f9' }}
                    thumbColor={switchValue ? '#6262f9' : '#f4f3f4'}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    alarmItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 20,
    },
    time: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000',
    },
    action: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
});

export default AlarmItem;
