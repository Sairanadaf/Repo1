function bar() {
    console.log( 'global bar function was called' );
};
console.log( bar );

bar(); // bar is not defined here

function foo() {
    console.log( 'foo called' );

    // bar can be used only within the scope it is declared in
    function bar() {
        console.log( 'bar called' );
    }

    bar();
}

foo();