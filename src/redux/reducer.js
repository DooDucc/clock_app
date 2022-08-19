const initialState = {
    alarmTime: {
        hour: '',
        minutes: '',
    },
    stopWatchList: [],
};

const alarmReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addStopWatch':
            return {
                ...state,
                stopWatchList: [...state.stopWatchList, action.payload],
            };

        default:
            return state;
    }
};

export { alarmReducer };
