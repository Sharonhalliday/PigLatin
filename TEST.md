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
Test: "It recognise a word starting with "s" before "qu" as a consonant and move to the end of the word and concat 'ay'."
Code: modifiedConsonant("quickly".concat("ay"));
Expected Output: quealsay

<!-- test three -->
//first test
Test: "It moves the first consonant letter to the end of the word and concat 'ay'."
Code: modifiedConsonant("banana".concat("ay"));
Expected Output: ananabay

//second test
Test:"It moves all the consonant before the first vowel to the back of the word and concat 'ay'."
Code: modifiedConsonant("street".concat("ay"));
Expected Output: eetstray


Describe: pigLatin();


<!-- test one -->
//vowel
Test: "It recognise a word starting with a vowel in the sentence and it runs the vowel function
Code: modifiedVowel("umbrella".concat("way"));
Expected Output: umbrellaway


<!-- test two-->
//for consonant


//first 
Test: "It recognise a word starting with "q" in the sentence and it runs the consonant function
Code: modifiedConsonant("quick".concat("ay"));
Expected Output: ickquay  

//second 
Test: "It recognise a word starting with "s" before "qu" in the sentence and it runs the consonant function
Code: modifiedConsonant("squeal".concat("ay"));
Expected Output: quealsay

//third
Test: "It recognise a word starting with any consonsonant in the sentence and it runs the consonant function
Code: modifiedConsonant("book".concat("ay"));
Expected Output: ookbay  


