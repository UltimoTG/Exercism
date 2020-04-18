const COMPLEMENTS = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

export const toRna = dnaString => {
  return dnaString
    .split('')
    .map(nucleotide => COMPLEMENTS[nucleotide])
    .join('');
};
