var arr = [1,2,3,4];

// Using named function
/* function square(arr)
{
   var res = [];
   for( var i = 0; i<arr.length; i++){
     res[i] = arr[i]*arr[i];
   }
   return res;
}


console.log('Original Array:', array)
console.log('Square of array:', square(array)); */

//Using anonymous function
var output = function ( arr ){
    res = [];
    for( var i = 0; i<arr.length; i++){
             res[i] = arr[i] * arr[i];
           }
           return res;
}
console.log('Original Array:', arr)
console.log('Converted array:', output(arr) );