/*
Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:

its digit sum, s = 1 + 7 + 2 + 9 = 19
reversing s = 91
and 19 * 91 = 1729 --> the number that we started with.
Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.
*/


function numberJoy(n) {
    // your code
    if (n < 10) {
        return true;
    }

    let arr = [...n.toString()];
    let digSum = 0;
    let digRev = 0;
    for (let i = 0; i < arr.length; i++) {
        digSum += +arr[i];
    }

    digRev = Number([...digSum.toString()].reverse().join(""));

    if (digSum * digRev == n) {
        return true;
    }
    return false;
}

console.log(numberJoy(1997));
console.log(numberJoy(1998));
console.log(numberJoy(1729));
console.log(numberJoy(1458));
console.log(numberJoy(81));
console.log(numberJoy(1));

//


function numberJoy(n) {
  var s = n.toString().split('').reduce((s,v) => s + +v, 0);
  var sr = +s.toString().split('').reverse().join('');
  return s * sr == n;
}

//

const numberJoy = (n) => {
  const sumNumbers = [...String(n)].reduce((a, b) => a + Number(b), 0);
  const result =
    sumNumbers * Number([...String(sumNumbers)].reverse().join(''));
  return result === n;
};

//


function numberJoy(n) {
 let sort=(n.toString().split('').reduce((a,b)=>a+ +b,0));
 return n-(sort*sort.toString().split('').reverse().join(''))===0;
}