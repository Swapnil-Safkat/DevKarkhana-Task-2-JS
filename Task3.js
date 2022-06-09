//problem-1
//Integer Decimal to Binary Conversion
console.log('Problem 1:');
let myBinary = ''
const binaryConverter = (num) => {
  rem = num % 2
  num = Math.floor(num / 2)
  myBinary = `${rem + myBinary}`;
  if (num > 0) binaryConverter(num)
};
//Binary to Decimal
const decimalConverter = (binary) => {
  binary = binary.toString().split("").reverse().join("");
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    decimal = decimal + binary[i] * Math.pow(2, i);
  }
  return decimal;
};

const dec = 18;
const bin = 1101;
binaryConverter(dec);
console.log(`Decimal ${dec} = Binary ${myBinary}`);
console.log(`Binary ${bin} = Decimal ${decimalConverter(bin)}`);


//problem 2
//max value
console.log('\n\nProblem 2: ');
const myArray = [2, 3, [5, 6, [7, 8], 9]];
let maxNum = 0;
const maxFinder = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') maxFinder(arr[i]);
    else {
      if (arr[i] > maxNum) maxNum = arr[i];
    }
  }
};
maxFinder(myArray);
console.log(`Maximum Number: ${maxNum}`);


//problem3
//frequency of words in an string
console.log('\n\nProblem 3');
let myString = 'Rajshahi University of Engineering and Technology';
myString = myString.replace(". ", " ");
const words = myString.split(" ");
console.log(words);
const freqOfWords = words.map(item => {
  return {
    word: item,
    freq: words.filter(w => w === item).length
  }
})
console.table(freqOfWords);