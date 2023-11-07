//TEST DATA - ONE OBJECT WITH THREE PROPERTIES AND THREE VALUES
let person = { 
        name: "Pursalane", 
        age: 11, 
        gender: "Female" 
};

//USE LITERAL STRINGS AS KEYS
console.log(person["name"]);
console.log(person["age"]);
console.log(person["gender"]);

// USE FOR IN TO LOOP THROUGH ALL STRING KEYS
for (let key in person) {
        console.log(key + " = " + person[key]);
}
