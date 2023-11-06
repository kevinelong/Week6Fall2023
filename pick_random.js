//ASSUMES LIST CONTAINS AT LEAST ONE ITEM
function pickOneFromList(list = []) {
    // const max = list.length;
    // const r = Math.floor( Math.random() * max);
    // return list[r];
    return list[Math.floor(Math.random() * list.length)];
}

const fruit = ["Apple", "Banana", "Cherry", "DragonFruit", "Papaya"];
// const totals = {
//     "Apple": 0,
//     "Banana": 0,
//     "Cherry": 0,
//     "DragonFruit": 0,
//     "Papaya": 0,
// }
const totals = {};
for (let i = 0; i < 5000; i++) {
    const f = pickOneFromList(fruit);
    if(!totals.hasOwnProperty(f)){ //DOES PROPERTY NOT EXIST
        totals[f] = 1;
    }else{
        totals[f]++; //BUMP IT UP BY ONE
    }
}

console.log(totals)
//{Apple: 9945, Banana: 10057, Cherry: 10040, DragonFruit: 10016, Papaya: 9942}
