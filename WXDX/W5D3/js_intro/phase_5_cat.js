function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  return `${this.owner} loves ${this.name}`;
};

Cat.prototype.meow = function () {
  return `${this.name} meows!`;
};

Cat.prototype.meowzers = function () {
  return `${this.name} meowzers!`;
};



//ES6 notation
class Cat {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
  }
  meow() {
    console.log('meow');
  }
}
