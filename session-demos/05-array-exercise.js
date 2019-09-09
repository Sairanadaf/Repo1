// (Create an array with a few numbers (at least 4). Now,
var numbers = [ 1, 3, 5, 7 ];

// Print the length of the array (number of items in the array).
console.log( numbers.length );

// Increment the value of the first item
console.log( ++numbers[0] );

// Re-assign the value of the last item to the sum of the last 2 items.
numbers[numbers.length - 1] = numbers[numbers.length - 1] + numbers[numbers.length - 2];

// Add another number after the end of the array Example: If the array is [ 1, 3, 5, 7 ] and you need to add 9, it is added to the end of the array, and the array becomes [ 1, 3, 5, 7, 9 ]
numbers[numbers.length] = 9;
numbers.push( 11 );

// Declare a new array that is empty (has no items). Use a for loop to copy the array items into the new array.
// )
var copy = []; // undefined
for( var i = 0; i < numbers.length; i++ ) {
    copy[i] = numbers[i]; // primtives are "copied by value" 
}
console.log( copy );

var anotherCopy = numbers; // non-primtives are "copied by reference" 
numbers[0]++;
console.log( anotherCopy ); // change
console.log( copy ); // unchanged
