import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { Argentina, Afganistan, Denmark, Japan } from '../../constants/city';

const ListTime = () => {
    return (
        <View style={styles.container}>
            <View style={styles.city}>
                <Text style={styles.cityName}>Argentina</Text>
                <Text style={styles.cityTime}>{Argentina[3]}</Text>
            </View>
            <View style={styles.city}>
                <Text style={styles.cityName}>Afganistan</Text>
                <Text style={styles.cityTime}>{Afganistan[3]}</Text>
            </View>
            <View style={styles.city}>
                <Text style={styles.cityName}>Denmark</Text>
                <Text style={styles.cityTime}>{Denmark[3]}</Text>
            </View>
            <View style={styles.city}>
                <Text style={styles.cityName}>Japan</Text>
                <Text style={styles.cityTime}>{Japan[3]}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    city: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
    },
    cityName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    cityTime: {},
});

export default ListTime;
