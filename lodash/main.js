// // Lodash version
const _ = require("lodash");

const ver = _.VERSION;
console.log(ver);

// // Lodash first and last array elements
// let words = ['sky', 'wood', 'forest', 'falcon',
//     'pear', 'ocean', 'universe'];

// let fel = _.first(words);
// let lel = _.last(words);

// console.log(`First element: ${fel}`);
// console.log(`First element: ${words[0]}`);
// console.log(`Last element: ${lel}`);
// console.log(`First element: ${words[words.length - 1]}`);


// Lodash nth array index
// let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(_.nth(nums, 3));
// console.log(_.nth(nums, -3));

// Lodash chunking array
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let c1 = _.chunk(nums, 2);
// console.log(c1);

// let c2 = _.chunk(nums, 3);
// console.log(c2);

// // Getting array slice

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let c1 = _.slice(nums, 2, 6);
// console.log(c1);

// let c2 = _.slice(nums, 0, 5);
// console.log(c2);

// // Lodash random number

// let r = _.random(10);
// console.log(r);

// r = _.random(5, 10);
// console.log(r);

// Lodash random array element
// let words = ['sky', 'wood', 'forest', 'falcon',
//     'pear', 'ocean', 'universe'];

// let word = _.sample(words);
// console.log(word);

// Lodash shuffling array elements
// let words = ['sky', 'wood', 'forest', 'falcon',
//     'pear', 'ocean', 'universe'];

// console.log(_.shuffle(words));
// console.log(_.shuffle(words));
// console.log(_.shuffle(words));
// console.log(words);

// // Lodash _.times function

// _.times(4, (x) => {
//   console.log("brave");
// })

// Lodash _.delay function
// function message()
// {
//     console.log("Some message");
// }

// _.delay(message, 150);
// console.log("Some other message");  
// _.delay(message, 10000);
// console.log("Last message");  

// Lodash _.range function
let vals = _.range(10);
console.log(vals);

let vals2 = _.range(5, 15);
console.log(vals2);

let vals3 = _.range(0, 15, 5);
console.log(vals3);
