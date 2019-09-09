var days = [
    'Monday', // 0
    1, // 1
    'Tuesday',
    true,
    'Wednesday',
    'Thursday' // 5
];

console.log( days[0] );
console.log( days[5] );
console.log( days[6] ); // undefined

days[1] = 'Someday';
days[7] = 'Saturday';

console.log( days );
console.log( days.length ); // 8

var matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6, 7 ],
    [ 8, 9 ]
];
console.log( matrix[1][2] );

for( var i = 0; i < days.length; i++ ) {
    console.log( 'The day is ' + days[i] );
}