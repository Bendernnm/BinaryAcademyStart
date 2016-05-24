var Dog = function (name, age, region) {
    Animal.apply(this, [name, age, "gav", region]);
};
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.goAway = function () {
    console.log("dog " + this.name + " go away");
};