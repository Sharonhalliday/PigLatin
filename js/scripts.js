// UI Logic

$(document).ready(function () {
    $("form#word-merch").submit(function (event) {
        event.preventDefault();

        const passage = $("#text-passage").val();

        let result = pigLatin(passage);
        $("#result").text(result);


    });
});