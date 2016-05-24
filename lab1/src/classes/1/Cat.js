var Cat = function (name, age, region) {
    Animal.apply(this, [name, age, "myav", region]);
};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.goAway = function () {
    console.log("cat " + this.name + " go away");
};