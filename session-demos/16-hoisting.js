// what happens internally... (hoisting)
// function f() {
//     console.log( 'f was called' );
// }

// var g;

// Variable hoisting
// var x; // the variable declaration is hoisted
// console.log( x );
// // var x = 100;
// x = 100;
// console.log( x );

f();

// function declaration syntax
function f() {
    console.log( 'f was called' );
}

g(); // undefined()

// function expression synatx
var g = function() {
    console.log( 'g was called' );
};
