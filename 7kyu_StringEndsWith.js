/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/


function solution(str, ending){
    let newStr = "";

    if (str.length < ending.length) {
        return false;
    } else if (ending === ''){
        return true;
    }

    for (let i = str.length - 1; i >= 0; i--) {
        newStr = str.slice(i, str.length);
        console.log(`${i} - ${newStr}`);
        if (newStr === ending) {
            return true;
        }
    }
    return false;
}

console.log(solution('abcabc', ''));
console.log(solution('abcabc', 'abcabc'));
console.log(solution('abcabc', 'cab'));


//

function solution(str, ending){
  return str.endsWith(ending);
}

//

const solution = (str, ending) => str.endsWith(ending);

//

function solution(str, ending){
  if (typeof(str) != "string" || typeof(ending) != "string")
    throw "wrong type";
  if (ending.length>str.length)
    return false;
  return str.substr(str.length-ending.length, ending.length) == ending;
}

//

function solution(str, ending){
  return str.substr(-ending.length) == ending;
}