// You can achieve similar functionality with Function.bind()
function getApiCaller( method, error ) {
    var x, y;

    return function makeApiCall( url ) {
        // make use of method, error & url
        // make use of x, y too

        // error( err );
    }
}

var makeGETCallerWithDefaultErrorHandler = getApiCaller( 
    'GET',
    function() {
        console.log( err )
    }
);

makeGETCallerWithDefaultErrorHandler( 'http://somesite.com/api/somepath' );
makeGETCallerWithDefaultErrorHandler( 'http://somesite.com/api/someotherpath' );