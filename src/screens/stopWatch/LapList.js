import { View, ScrollView } from 'react-native';
import React from 'react';

import LapItem from './LapItem';

const LapList = ({ lapList, timer }) => {
    return (
        <ScrollView>
            {lapList.map((lap, index) => (
                <LapItem
                    turn={lapList.length - index}
                    key={lapList.length - index}
                    interval={index === 0 ? timer + lap : lap}
                />
            ))}
        </ScrollView>
    );
};

export default LapList;
