import { View, ScrollView } from 'react-native';
import React from 'react';

import LapItem from './LapItem';

const LapList = ({ laps, currentTime }) => {
    return (
        <ScrollView>
            {laps.map((lap, index) => (
                <LapItem
                    turn={laps.length - index}
                    key={laps.length - index}
                    interval={
                        index === 0 ? currentTime.now - currentTime.start : lap
                    }
                />
            ))}
        </ScrollView>
    );
};

export default LapList;
