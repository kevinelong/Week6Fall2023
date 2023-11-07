//FAMILIAR
x = 123
console.log(x)
s = "my text" // put a value in a labeled jar
console.log(s) // pull the value back out of that jar


const f = (x) => x * 2; //like line 2 we are putting a value into a variable
console.log(f(33)); //apply the function
/*
1. pull function out of "f"
2. call/invoke the function using (33) passing in argument 33
3. recieve the returned value 66
4. log the value 66 to the console.
*/

function apply(callbackFunction1, parameter2){
    result = callbackFunction1(parameter2);
    console.log(result);
}
apply(f, 33);
apply(s=>s+s+s, "hello"); //anonymous function AKA lambda

const f2 = f; //New variable get value inside f
apply(f2, 11); //WHAT?