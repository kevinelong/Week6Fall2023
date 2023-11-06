
//NON-ARROW FUNCTION
function doIt() {
    console.log("Done.")
}

function addTwo(a, b) {
    return a + b
}

console.log(addTwo(6, 7));

//WHAT IS AN ARROW FUNCTION? ITS ANONYMOUS (WITHOUT A NAME), DOESNT NEED A NAME
const double = x => x * 2; // NAMING, PARENTHESES, return KEYWORD and CURLY BRACES ALL OPTIONAL
console.log(double(11))

const addThree = (a, b, c) => {
    return a + b + c;
}

console.log(addThree(6,7,8))
