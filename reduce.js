// const cartTotal = cart.reduce((a, c) => a + (c.price * c.quantity), 0)
// console.log(cartTotal);

// FAT ARROW FUNCTION
// = eqauls sign (under the plus sign =/+)
// > greater than (shifted period ./>)

//accumulator is a running subtotal;
// current is each individual incoming value from the list


//TEST DATA
numbers = [11, 33, 22, 99, 55]

//REDUCE
f = (accumulator, current) => accumulator + current;
total = numbers.reduce(f, 0)
console.log(total) // 220

//FOR EACH USING GLOBAL ACCUMULATOR FOR TOTAL
accumulator = 0 //RUNNING SUBTOTAL GLOBAL VAIABLE
f2 = (n) => accumulator = accumulator + n;
numbers.forEach(f2)
console.log(accumulator)

//CLASSIC FOR LOOP, USING GLOBAL VARIABLE total
total = 0;
for(i=0; i < numbers.length; i++){
    n = numbers[i];
    total = total + n;
}
console.log(total);
