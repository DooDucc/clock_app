const addAlarm = (data) => {
    return {
        type: 'addAlarm',
        payload: data,
    };
};

const addStopWatch = (data) => {
    return {
        type: 'addStopWatch',
        payload: data,
    };
};

export { addAlarm, addStopWatch };
