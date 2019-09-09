function f( x ) {
    console.log( 'f called' );
    
    // we say function g "closes over" the variables it declares and the ones it does not, but exist in its scope
    function g() { // closure( g ) = { y, x, any other global variables }
        var y;
        console.log( 'g called when f was passed x = ', x );
        return x;
    }

    return g;
}

var h1 = f( 1 ); // g will be created once // h1 will remember the value 1 for x
var h2 = f( 2 ); // g will be created once again

console.log( h1() );
console.log( h2() );

h1();
h2();

h1();
h2();
