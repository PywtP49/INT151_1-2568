// Problem 1 — Run-Length Encoding
// Write a function that takes a list or string and returns a list of tuples (count, element) for each group of identical consecutive elements.

function runLengthEncode(data) {
    if (!data || data.length === 0) return [];

    let result = [];
    let count = 1;

    for (let i = 1; i < data.length; i++) {
        if (data[i] === data[i - 1]) {
            count++;
        } else {
            result.push([count, data[i - 1]]);
            count = 1;
        }
    }
    result.push([count, data[data.length - 1]]);
    return result;
}

console.log(runLengthEncode("aaabbcaaa"));
console.log(runLengthEncode([1, 1, 2, 2, 2, 3]));
console.log(runLengthEncode(""));

// Problem 2 — Define map and filter using foldr
// Write your own implementations of map and filter functions only using foldr.

function myMap(f, arr) {
  return arr.reduceRight((acc, x) => [f(x), ...acc], []);
}

function myFilter(p, arr) {
  return arr.reduceRight((acc, x) => (p(x) ? [x, ...acc] : acc), []);
}

const numbers = [1, 2, 3, 4, 5];

const doubled = myMap(x => x * 2, numbers);
console.log('myMap result:', doubled);

const evens = myFilter(x => x % 2 === 0, numbers);
console.log('myFilter result:', evens);
