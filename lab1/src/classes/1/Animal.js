var Animal = function (name, age, sound, region) {
    this.name = name;
    this.age = age;
    this.sound = sound;
    this.region = region;

    return this;
};
Animal.prototype = {
    say: function () {
        console.log(this.sound + " - " + this.sound);
    },
    toString: function () {
        return "\n" + this.name + ": " + this.age + ", " + this.region + ".";
    },
    goAway: function () {
        console.log("goAway");
    }
};