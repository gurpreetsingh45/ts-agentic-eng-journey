"use strict";
function getLength(input) {
    // TODO: return the length whether input is a string, array, or null
    if (typeof input === "object") {
        return 0;
    }
    return input.length;
}
console.log("name");
