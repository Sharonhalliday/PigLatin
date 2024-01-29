// UI Logic

$(document).ready(function () {
    $("form#word-merch").submit(function (event) {
        event.preventDefault();

        const passage = $("#text-passage").val();

        let result = pigLatin(passage);
        $("#result").text(result);


    });
});


// Business Logic

// for vowel
function modifiedVowel(passage) {
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