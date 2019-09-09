// arithmetic operators
var x = 10, y = 20, z;
// console.log( x + y );
// console.log( x - y );
// console.log( x * y );
// console.log( x / y );
// console.log( 13 % 7 );
// console.log( 10 / 3 );
// console.log( "Hello" - 3 ); // NaN
// console.log( typeof NaN ); // "number"
// console.log( z === undefined );
// console.log( -1 / 0 );
// console.log( -1 / 0 === Number.NEGATIVE_INFINITY );

// relational operators (<, <=, ==, !=, !== )
// console.log( 1 > 2 ); // false
// console.log( 2 >= 1 + 1  ); // true
// console.log( 1 === "1" ); // type-safe equality comparison operator - evaluates to false
// console.log( 1 == "1" ); // true
// console.log( "3" > 4 );

// assignment
// var x = 10;
// x += 10; // x = x + 10;
// x = "hello";


// logical operators
// !, &&, ||
var priceOfOnePlus7 = 45000, bankBalance = 40000, doINeedNewPhone = true;

// false
var willIBuyOnePlus7 = ( priceOfOnePlus7 < bankBalance ) && doINeedNewPhone;
console.log( willIBuyOnePlus7 );

// falsy and truthy values
// equivalent to false - "falsy values" are - false, undefined, null, 0, ""
// Values that are not falsy are "truthy"
var x = "";
if( x ) {
    console.log( 'inside if' );
} else {
    console.log( 'inside else' );
}

// special operators
var x = 100;
x > 100 ? console.log( 'greater than 100' ) : console.log( 'less than or equals 100' );

// typeof, new, [], ., 