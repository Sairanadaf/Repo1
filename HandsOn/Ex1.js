var arr = [1,2,3,4];
arr[0] = ++arr[0];
arr[3] = arr[2] + arr[3];
console.log(arr);
//arr[arr.length] = 9;
arr.push(9);
console.log(arr);

var copy = [];
for(var i = 0; i < arr.length; i++)
{
    copy[i] = arr[i];
};

console.log("copy:", copy);