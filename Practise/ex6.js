function sum( x, y, z ){
    function transform( ){

    return z(x)+z(y);
    }
    return transform();
}
function square( x ) { return x * x };
function cube( x ) { return x * x * x };



console.log( sum( 2, 3, square ) ); // prints 13
console.log( sum( 2, 3, cube ) ); // prints 36

