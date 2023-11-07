let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];
// .map() ALWAYS returns an array of the same length as the input array.
// .reduce() ALWAYS returrns EXACTLY 1 item.

// b. - total for cart incorporating quantity accumulator, current and initial
const cartTotal = cart.reduce((a, c) => a + (c.price * c.quantity), 0)
console.log(cartTotal);

// a. - map return only name/item and then forEach to display

// listOfStrings = cart.map(row => row.item)
// listOfStrings.forEach(text => console.log(text));

//COMBINED
cart.map(r => r.item).forEach(t => console.log(t));
//WITHOUT THE SUGGESTED CALL TO MAP
cart.forEach(r => console.log(r.item));

//cart.map(r => r.item).forEach(console.log); //LOGS NAME,INDEX,AND LIST EVERY TIME

console.log(cart.map(r => r.item).join("\n")); //OR USE "\n" OR "\t" OR " " OR "<br>"
//SORT BY EXTENDED PRICE
const fnByExtendedPrice = (a, b) => (b.price * b.quantity) - (a.price * a.quantity); // DESCENDING BIG to LITTLE
const fnByQuantity = (a, b) => a.quantity - b.quantity; //ASCENDING (LITTLE TO BIG)
const fnByPrice = (a, b) => a.price - b.price; //ASCENDING (LITTLE TO BIG)
const sorted = cart.sort(fnByQuantity);

const displayRow = (r) => {
    return `${r.item}, ${r.quantity} * ${r.price} = ${r.price * r.quantity}`;
}
console.log(sorted.map(displayRow).join("\n"));