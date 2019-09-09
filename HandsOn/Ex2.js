var arr = [1,2,3,4];
var res = new Array;
for (i = 0; i < arr.length; i++)
{
  res[i] = arr[i]*arr[i];
}

console.log('Original:',arr);
console.log('Converted:', res);