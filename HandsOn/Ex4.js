//Closure concept
function sum (x,y) 
{
    
    function square(num){
        var result;
        result = x + y + num*num;
        return result;
    }
    
     return square;
}

var output = sum(2,3);
console.log(output(5));
