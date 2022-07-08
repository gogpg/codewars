console.clear()

///rastu arejuje teigiamus skaicius ir juos susumuoti.

function positiveSum(arr) {
    let total = 0;
  for (let i = 0; i < arr.length; i++) {  ///prasukame cikla 
    if (arr[i] > 0) {                     //randame skaicius, kurie yra daugiau uz nuli, ty, teigiami
        total += arr[i];                  //juos susumuojame
    }
  }
  return total;     //graziname visa teigiamu skaiciu suma.
}

/*function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);      ///trumpesnis uzdavinio sprendimo budas
 }*/



console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);