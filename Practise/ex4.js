function squareit( num ){
    for( i=0; i<num.length; i++){
        num[i] = num[i] * num [i];
    }
    return num;
}

function foo(){
    console.log( arguments );
    console.log( arguments[0] );
    console.log( arguments[1] );
}

var arr = [1, 2, 3, 4, 5];
console.log( squareit( arr ) );
console.log( arr );

foo(1, 2);