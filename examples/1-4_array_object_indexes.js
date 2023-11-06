
let stateInfo = [
    {
        state: "California",
        cities: ["San Diego", "San Francisco",
            "Santa Barbara", "Monterey", "Redwood City"]
    },
    {
        state: "Maryland",
        cities: ["Leonardtown", "St Leonard",
            "St Mary's City", "Annapolis", "Ocean City"]
    },
    {
        state: "Texas",
        cities: ["San Antonio", "Austin", "Pflugerville",
            "Dallas", "Ft Worth", "Paris", "Athens"]
    }
];

console.log("I live in " + stateInfo[2].cities[4] + " " + stateInfo[2].state);
console.log("I live in " + stateInfo[0].cities[0] + " " + stateInfo[0].state);

stateInfo.forEach((s,i) => {
    console.log(i, s.state);
    s.cities.forEach((c,ci) => console.log("\t" + ci + " " + c));
});