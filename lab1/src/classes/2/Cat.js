var Cat = Object.create(Animal);
Cat.constructor = function (name, age, region) {
    Animal.constructor.apply(this, [name, age, "myav", region]);
    this.goAway = function () {
        console.log("cat " + this.name + " go away");
    };
    return this;
};