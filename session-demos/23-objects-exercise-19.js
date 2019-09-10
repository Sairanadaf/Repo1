// Create 2 objects (that represents 2 persons, say John and Jane), each with 2 properties - name (a string), and age (a number).
var john = {
    name: 'John',
    age: 32
};

var jane = {
    name: 'Jane',
    age: 28
};

// Print John's age.
console.log( john.age );

// Increase Jane's age and print the Jane object.
jane.age++;
console.log( jane );

// Add an address property to John and set it to an object with "first line" and "city" as properties (the values for these properties also need to be set).
john.address = {
    "first line": '#32, Xyz avenue',
    city: 'Bangalore'
};

// Print John's city name
console.log( john.address.city );

// Add a new property spouseName to each object. Set John's spouseName property to Jane object, and Jane's spouseName property to John object
john.spouseName = jane;
jane.spouseName = john;
console.log( john );
console.log( jane );

// Add an emailids property to Jane. Set it to an array with 2 strings representing Jane's email ids.
jane.emailids = [
    'jane@sap.com',
    'jane@gmail.com'
];

// Print the second email id of Jane.
console.log( jane.emailids[1] );

// Change the second email id of Jane and print it.
jane.emailids[1] = 'jane@yahoo.com';
console.log( jane.emailids[1] );

// Add a third email id for Jane and print the Jane object.
jane.emailids.push( 'jane@xyz.com' );
console.log( jane );

console.log( jane.age + 2 );
console.log( jane );