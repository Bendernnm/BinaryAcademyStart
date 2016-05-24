var Woodpecker = function (name, age, region) {
    Animal.apply(this, [name, age, "took", region]);
};
Woodpecker.prototype = Object.create(Animal.prototype);
Woodpecker.prototype.goAway = function () {
    console.log("woodpecker " + this.name + " go away");
};