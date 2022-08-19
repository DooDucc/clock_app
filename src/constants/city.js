const calcTime = (offset) => {
    var b = new Date();
    var utc = b.getTime() + b.getTimezoneOffset() * 60000;
    var nd = new Date(utc + 3600000 * offset);
    return nd.toLocaleString().split(' ');
};
const Argentina = calcTime('-3');
const Afganistan = calcTime('+4.3');
const Denmark = calcTime('+2');
const Japan = calcTime('+9');

export { Argentina, Afganistan, Denmark, Japan };
