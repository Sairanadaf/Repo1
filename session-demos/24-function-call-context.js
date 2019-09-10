// When a function is called it has a "context"
function foo() {
    console.log( this );
    console.log( arguments[0] );
    console.log( '*******' );
}

foo( "hello" );
foo.call( "hello" ); // foo() but with a new context ("hello")
foo.call( "hello", 1 ); // foo( 1 ) but with a new context ("hello")

var John = {
    "name" : 'John',
    "years in sap" : 2,
    increaseExperience: function() { // for a method, the call context is the object to which it belongs
        console.log( this );
    }
};

John.increaseExperience();
John.increaseExperience.call( { x: 1 } );

var increaseExperience = John.increaseExperience.call();
increaseExperience();