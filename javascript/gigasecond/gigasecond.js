export const gigasecond = (givenDate) => {
    const currentDate = givenDate.getTime();
    const tempDateInMillis = currentDate + (1000000000 * 1000); 
    return new Date(tempDateInMillis);
};

// eslint-disable-next-line no-console
// console.log(gigasecond(new Date(Date.UTC(2015, 8, 14))));