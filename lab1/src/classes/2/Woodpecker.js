var Woodpecker = Object.create(Animal);
Woodpecker.constructor = function (name, age, region) {
    Animal.constructor.apply(this, [name, age, "took", region]);
    this.goAway = function () {
        console.log("woodpecker " + this.name + " go away");
    };
    return this;
};