console.clear()

///2D-array

///kokia visu skaiciu suma?

const numbers = [
    [1, 2, 3, 4,],
    [11, 22, 33, 44,],
    [111, 222, 333, 444],
];
let total = 0;

for (let i = 0; i<numbers.length; i++) { //ciklas masyve   //........Pirmas sprendimo variantas

    for (let a = 0; a< numbers[i].length; a++) { //ciklas masyvo masyvuose
        total += numbers[i][a]
    }
}
console.log(total)













