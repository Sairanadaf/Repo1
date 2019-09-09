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
}

foo();
console.log( 'x used globally (after calling foo) = ', x );
console.log( 'y used globally = ', y );