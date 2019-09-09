function f( x ) {
    console.log( 'f was called' );
    x( 10 ); // g()
    arguments[0]( 40 ); // g()
}

function g( a ) {
    console.log( 'g was called with a = ' + a );
}

f( g );

var y = g;
y( 20 ); // g()
f( y );