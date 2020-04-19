export const hey = message => {
  if (!containsOnlyNumbers(message) && isYelling(message) && isQuestion(message)) {
    return "Calm down, I know what I'm doing!";
  } else if (!containsOnlyNumbers(message) && isYelling(message)) {
    return 'Whoa, chill out!';
  } else if (isQuestion(message)) {
    return 'Sure.';
  } else if (relaceAllSpecialChars(message) === '') {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }
};

// helper methods
const getMsgCharArr = message => message.split('');
const relaceAllSpecialChars = message => message.replace(/[^\w]/gi, '');

// decision methods
const isYelling = message => message === message.toUpperCase();

const isQuestion = message => {
  const trimmedMsg = message.trim();
  return getMsgCharArr(trimmedMsg)[trimmedMsg.length - 1] === '?';
};

const containsOnlyNumbers = message =>
  relaceAllSpecialChars(message)
    .split('')
    .every(msgChar => '0123456789'.includes(msgChar));
