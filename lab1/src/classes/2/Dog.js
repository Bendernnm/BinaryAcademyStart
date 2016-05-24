var Dog = Object.create(Animal);
Dog.constructor = function (name, age, region) {
    Animal.constructor.apply(this, [name, age, "gav", region]);
    this.goAway = function () {
        console.log("dog " + this.name + " go away");
    };
    return this;
};