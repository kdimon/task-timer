export default duration => {
    const sec = duration / 1000;
    let hours = Math.floor(+parseFloat(sec / 3600 % 24)).toFixed(0);
    let minutes = Math.floor(+parseFloat(sec / 60 % 60)).toFixed(0);
    let seconds = Math.floor(+parseFloat(sec % 60)).toFixed(0);

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds}`;
};