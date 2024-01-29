Describe: modifiedVowel();

Test: "It recognise the letters 'aeiou' in a sentence as a vowel and concat 'way' to the end of the word."
Code: modifiedVowel("apple".concat("way"));
Expected Output: appleway



Describe: modifiedConsonant();


<!-- test one -->
Test: "It recognise 'qu' and move them as one to the end of the word and concat 'ay'."
Code: modifiedConsonant("quickly".concat("ay"));
Expected Output: icklyquay

<!-- test two-->
Test: "It recognise 'squ' and move them as one to the end of the word and concat 'ay'."
Code: modifiedConsonant("quickly".concat("ay"));
Expected Output: ealsquay

<!-- test three -->
//first test
Test: "It moves the first consonant letter to the end of the word and concat 'ay'."
Code: modifiedConsonant("banana".concat("ay"));
Expected Output: ananabay

//second test
Test:"It moves all the consonant before the first vowel to the back of the word and concat 'ay'."
Code: modifiedConsonant("street".concat("ay"));
Expected Output: eetstray
