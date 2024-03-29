// UI Logic

$(document).ready(function () {
    $("form#myForm").submit(function (event) {
        event.preventDefault();

        const passage = $("#text-passage").val();

        let result = pigLatin(passage);
        $("#result").text(result);


    });
});


// Business Logic

// for vowel
function modifiedVowel(passage)   {
    let vowels = "aeiou";
    if (passage.trim().length === 0) {
        return '';
    }
    const wordArray = passage.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
        let currentWord = wordArray[i]
        if (vowels.includes(currentWord[0].toLowerCase())) {
            wordArray[i] = currentWord.concat("way");
        }
    }
    return wordArray.join(" ");

}

//for consonant
function modifiedConsonant(word) {

    let vowels = "aeiou";
    let characterWords = word.trim().split("");
    let returnString = "";

    if (word.trim().length === 0) {
        return '';
    }

    for (let i = 0; i < characterWords.length; i++) {
        if ("q" === characterWords[i].charAt(0).toLowerCase()) {
            returnString = word.slice(2).concat(characterWords[i] + characterWords[i + 1] + "ay");
            return returnString;
        } else if ("sq" === characterWords[i].toLowerCase() + characterWords[i + 1].toLowerCase()) {
            returnString = word.slice(1).concat(characterWords[i] + "ay");
            return returnString;
        } else if (vowels.includes(characterWords[i].toLowerCase())) {
            returnString = word.slice(i).concat(word.slice(0, i) + "ay");
            return returnString;
        }
    }
    return word;
}



function pigLatin(passage) {
    if (passage.trim().length === 0) {
        return '';
    }

    let vowels = "aeiou";
    const wordArray = passage.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
        let currentWord = wordArray[i];

        if (currentWord !== '') {
            if (vowels.includes(currentWord[0].toLowerCase())) {
                wordArray[i] = modifiedVowel(currentWord);
            } else {
                wordArray[i] = modifiedConsonant(currentWord);
            }
        }

    }

    return wordArray.join(" ");
}