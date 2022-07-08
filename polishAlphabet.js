console.clear()

function correctPolishLetters (string) {
    let polishLetters = {
        "ć" : "c",
        "ę" : "e",
        "ą" : "a",
        "ł" : "l",
        "ń" : "n",
        "ó" : "o",
        "ś" : "s",
        "ź" : "z",
        "ż" : "z"
    };
    let newString = '';
    for (let letter of string) {  //prasukame cikla stringe
        if (polishLetters[letter]) {  //jeigu lenkisku raidziu objekte esanti raide (true) randama stringe
            newString += polishLetters[letter] 
        } else {
            newString += letter;
        }
    }
    return newString;
};

console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");