const data = [
    { id:111, name:"Pencil", price: 1.11},
    { id:222, name:"Pen", price: 2.22},
    { id:333, name:"Pad", price: 3.33},
];

// const callbackFunction = item => console.log(item.name);
// data.forEach(callbackFunction); 

data.forEach(item => console.log(item.name)); //LOOP CALLING NEW FUNCTION FOR EACH ITEM

data.forEach(console.log) //LOGS ALL THREE PARAMETERS OUR CALLBACK RECEIVES (item, index, list)

function showItem(item, index, list){
    console.log(
        item.id, 
        item.name, 
        "$" + item.price.toFixed(2), 
        "INDEX " + index + " OF " + list.length
    );
}

data.forEach(showItem);