import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Clock, Alarm, StopWatch, Timer } from '../screens';

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
    const inset = useSafeAreaInsets();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#000',
                tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
                tabBarItemStyle: { width: 90 },
                tabBarIndicatorStyle: { backgroundColor: '#f8757f' },
            }}
            initialRouteName="Clock"
        >
            <Tab.Screen name="Clock" component={Clock} options={{ tabBarLabel: 'Clock' }} />
            <Tab.Screen name="Alarm" component={Alarm} options={{ tabBarLabel: 'Alarm' }} />
            <Tab.Screen name="StopWacth" component={StopWatch} options={{ tabBarLabel: 'StopWatch' }} />
            <Tab.Screen name="Timer" component={Timer} options={{ tabBarLabel: 'Timer' }} />
        </Tab.Navigator>
    );
};

export default TopTabNavigation = () => {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
};
