const formatDate = (date) => {
    const hours = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();

    return `${hours + 12 - 1}:${mins >= 10 ? mins : `0${mins}`}:${
        secs >= 10 ? secs : `0${secs}`
    }`;
};

export default formatDate;
