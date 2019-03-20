def is_pangram(sentence):
    alphabets = list(map(chr, range(97, 123)))
    for i in alphabets:
        if (i not in sentence.lower()):
            return False
    
    return True
