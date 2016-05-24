var Animal = {
    constructor: function (name, age, sound, region) {
        this.name = name;
        this.age = age;
        this.sound = sound;
        this.region = region;
        this.say = function () {
            console.log(this.sound + " - " + this.sound);
        };
        this.goAway = function () {
            console.log("goAway");
        };

        return this;
    }
};