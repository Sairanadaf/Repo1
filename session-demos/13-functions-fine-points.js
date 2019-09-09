function foo( x ) {
    console.log( arguments );
    console.log( arguments[0] );
    console.log( arguments[1] );
    console.log( arguments.length ); // 2

    var result = 0;
    for( i = 0; i < arguments.length; i++ ) {
        result = result + arguments[i];
    }

    console.log( 'result = ', result );
    // return undefined;
}

console.log( foo() ); // x is undefined
console.log( foo( 123, 456 ) );