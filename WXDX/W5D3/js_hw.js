// /* Write a function titleize that takes an array of names and a function (callback). titleize should use Array.prototype.map to create a new array full of titleized versions of each name - titleize meaning "Roger" should be made to read "Mx. Roger Jingleheimer Schmidt". Then pass this new array of names to the callback, which should use Array.prototype.forEach to print out each titleized name. */
//
// function titleize(names, printCallback) {
//   var titled = names.map(name =>
//     return (`Mx. ${name} Jingleheimer Schmidt`)
// }
//
// function titleize(names) {
//   var titled = names.map(name =>
//     return `Mx. ${name} Jingleheimer Schmidt`)
// }
//
// function printCallback(array) {
//   array.forEach(el => console.log(el))
// }
//
//
// function titleize(names, printCallback) {
//   const titled = names.map(function(name) {
//     `Mx. ${name} Jingleheimer Schmidt`;
//   });
//
//   printCallback(titled) {
//     titled.forEach(function(el) {
//       console.log(el);
//     });
//   }
// };
//
// function titleize(names, printCallback) {
//   const titled = names.map(function(name) {
//     return `Mx. ${name} Jingleheimer Schmidt`;
//   });
//   return printCallback(titled) {
//     titled.forEach(el => console.log(el)) ;
//   }
// }
//
// function titleize(names, printCallback) {
//   const titled = names.map((name) => `Mx. ${name} Jingleheimer Schmidt`);
//       titled.forEach(el => console.log(el));
//     }

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = [tricks];
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRR!!!!!!'`);
};

Elephant.prototype.grow = function() {
  this.height += 12;
};

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function() {
  console.log(`${this.name} is ${this.tricks[Math.floor((Math.random() * this.tricks.length))]}!`);
};

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function(elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
}

// function bfastOrder(item) {
//   let orders = [];
//   orders.push(item);
//   console.log('I\'d like ${orders}')
// }
