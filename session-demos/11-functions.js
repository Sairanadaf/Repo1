// Function Declaration syntax
function sum( x, y ) {
    var result = x + y;
    x++;
    return result;
}

var a = 10, b = 20;
console.log( sum( a, b ) ); // numbers 10, 20 will be copied over to x and y
console.log( a );

function squareIt( arr ) {
    for( var i = 0; i < arr.length; i++ ) {
        arr[i] = arr[i] * arr[i];
    }
}

var numbers = [ 1, 2, 3, 4 ];

console.log( squareIt( numbers ) ); // pass by reference for non-primtives - numbers and arr are one and the same
console.log( numbers );
