function isNotEmptyStrin(string) {
    return string.length > 0;
}

function appendAll(element) {
    for (var i = 1; i < arguments.length; i++) {
        element.append(arguments[i]);
    }
}