import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import Time from './Time';
import ListTime from './ListTime';

import { CustomButton } from '../../components';

const Clock = () => {
    return (
        <View style={styles.container}>
            <View style={styles.time}>
                <Time />
            </View>
            <View style={styles.listTime}>
                <ListTime />
            </View>
            <CustomButton title="set clock" backgroundColor="#f42c5b" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    time: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
    },
    listTime: {
        flex: 2,
        width: '100%',
        paddingHorizontal: 30,
    },
});

export default Clock;
