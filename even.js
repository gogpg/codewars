console.clear()

function testEven(n) {
    return n % 2 == 0;  ///patikriname ar lyginis skaicius duotas (atsakymai bus true arba false pagal nutylejima) Ar skaicius padalintas is dvieju lieka 0. Liekana = 0.
}

//const testEven = (n) => n % 2 === 0   trumpas uzdavinio sprendimo variantas.

console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");