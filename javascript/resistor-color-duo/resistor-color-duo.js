const COLORS = {
    "black":"0",
    "brown":"1",
    "red":"2",
    "orange":"3",
    "yellow":"4",
    "green":"5",
    "blue":"6",
    "violet":"7",
    "grey":"8",
    "white":"9"
}

export const decodedValue = colorKeyArr => {
    return Number(COLORS[colorKeyArr[0]] + COLORS[colorKeyArr[1]]);
};

// This is a more robust solution that will work for any number of elements in the array
// export const decodedValue = colorKeyArr => {
//     return colorKeyArr.reduce((prevValue, currentValue) => {
//         return Number(prevValue ? prevValue.concat(COLORS[currentValue]): COLORS[currentValue])
//     }, '')
// };
