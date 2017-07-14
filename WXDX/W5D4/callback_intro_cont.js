// const readline = require('readline');
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// function teaBiscuit() {
//   let userTea, userBiscuit;
//
//     reader.question("what kind of tea would you like?", (res) => {
//       console.log(`so you want the ${res} huh?`);
//         reader.question(`what kind of biscuits do you want with your ${res}?`, function(res2) {
//           console.log(`the ${res2} yea?`);
//           console.log(`so the ${res} with ${res2}? mm yea bby.`);
//     });
//   });
//
//     // reader.question(`what kind of biscuits do you want with your ${userTea}?`, function(res) {
//     //   userBiscuit = res;
//     //   console.log(`you replied ${res}`);
//     // });
//
//     // console.log(`so you want the ${userTea} with ${userBiscuit}. MMM YUM.`);
// }
//
// teaBiscuit();

function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`);
};

const Markov = new Cat ();
const Noodles = new Dog ();

Noodles.chase(Markov);
Noodles.chase.call(Markov, Noodles);
// Noodles.chase.call(Noodles, Markov);
// Noodles.chase.apply(Noodles,[Markov]);
Noodles.chase.apply(Markov, [Noodles]);
// Noodles.chase.apply(Noodles, [Markov]);
