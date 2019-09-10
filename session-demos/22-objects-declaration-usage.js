// name is a "key" and "John" is the key's "value"
var personalDetails = {
    dob: 'Dec 18 1995',
    maritalStatus: 'married'
};

function getTeam() {
    return this.team;
};

var John = {
    "name" : 'John',
    "years in sap" : 2,
    team: 'Delivery',
    projects: [
        'BYD',
        'SME'
    ],
    personalDetails: personalDetails,
    increaseExperience: function() { // for a method, the call context is the object to which it belongs
        console.log( this );
        this["years in sap"]++;
    }
};

John.getTeam = getTeam;

John.increaseExperience();
console.log( 'John.getTeam = ', John.getTeam() );

console.log( 'John.getTeam.call( this ) = ', John.getTeam.call( this ) ); // "this" refers to global object
console.log( 'John.getTeam() = ', John.getTeam() );
console.log( getTeam.call( John ) );

// console.log( John );

// console.log( John.name );
// console.log( John["years in sap"] );
// var requiredDetail = "name";
// console.log( John[requiredDetail] );

// John.name = 'John S';

// // add a new key
// John.location = 'Bangalore'; // add a string value
// John.emailids = [ 'John@sap.com', 'John@gmail.com' ]; // add an array
// // similarly we can add objects too

// console.log( 'John dob = ', John.personalDetails.dob );
// console.log( 'John second project = ', John.projects[1] );

// delete John.personalDetails;
// delete John.personalDetails.dob;

// console.log( John );

// var JohnMasterDetails = {
//     spouseName: 'Jane',
//     childrenNames: [
//         'Mark',
//         'RIta'
//     ],
//     sapEmployeeDetails: John
// };

// console.log( JohnMasterDetails.xyz ); // undefined
// console.log( JohnMasterDetails.personalDetails ); // undefined