'use strict'; // use strict mode for all code

// global - outside of all functions
var x = 100;

console.log( 'x used globally = ', x );

function foo() {
    // 'use strict'; // use strict mode onlt for foo function execution

    // uncomment to check how use strict works
    // x = 200, y = 300; // function-scope variables (variables scoped to foo function)
    var x = 200, y = 300; // function-scope variables (variables scoped to foo function)
    console.log( 'x used within foo = ', x );
    console.log( 'y used within foo = ', y );

    function bar() { // bar is scoped to foo
        var y = 500;
        var p = 700; // p is scoped to bar - cannot be used in foo too
        console.log( 'x used within bar = ', x ); // foo:x, i.e. 200
        console.log( 'y used within bar = ', y ); // y, i.e. 500

        for( var i = 0; i < 10; i++ ) { // i is scoped to bar

        }

        if( 1 < 2 ) { // j is scoped to bar
            var j = 100;
        }

        console.log( 'i used outside of for block = ', i );
        console.log( 'j used outside of for block = ', j );
    }

    bar();
    // console.log( 'p used within foo = ', p ); // error

    // console.log( 'i used outside of for block (outside bar) = ', i ); // error
    // console.log( 'j used outside of for block (outside bar) = ', j );
}

foo();
console.log( 'x used globally (after calling foo) = ', x );
// console.log( 'y used globally = ', y ); // error - exists only within foo