function getType(obj) {
    var sound = obj.sound;
    switch (sound) {
        case "gav":
            console.log("Dog");
            break;
        case "myav":
            console.log("Cat");
            break;
        case "took":
            console.log("Woodpecker");
            break;
        default:
            console.log("ops");
            break;
    }
}

function getTypeUp() {
    var sound = this.sound;
    switch (sound) {
        case "gav":
            console.log("Dog");
            break;
        case "myav":
            console.log("Cat");
            break;
        case "took":
            console.log("Woodpecker");
            break;
        default:
            console.log("ops");
            break;
    }
}