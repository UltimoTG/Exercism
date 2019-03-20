export const isPangram = (sentence) => {
  // set pangram to true initially
  let pangram = true;

  let i = 0;
  let j = 0;

  // variable to hold all alphabets
  const alphabets = [];

  // get all samll alphabets
  for (i = 97; i < 123; i += 1) {
    const alphabet = String.fromCharCode(i);
    alphabets.push(alphabet);
  }

  // if sentence is empty, it cannot be a pangram
  if (sentence.length === 0) {
    pangram = false;
  } else {
    for (j = 0; j < alphabets.length; j += 1) {
      const found = sentence.toLowerCase().indexOf(alphabets[j]);

      // if any of the alphabets in the array doesn't exist in the sentence, it's not a pangram
      if (found === -1) {
        pangram = false;
      }
    }
  }

  return pangram;
};
