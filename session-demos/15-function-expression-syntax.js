// the RHS is called a "function expression"
// function expression syntax for defining a function
var sum = function( x , y ) {
    return x + y;
};

console.log( sum( 10, 20 ) );
console.log( typeof sum ); // "function"