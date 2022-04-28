// Type Assertions
// Type Assertions --> explictly telling the complier the type of a varible

// Assigns message as an 'any' datatype varible when varible is not defined
let message;

// assigns message to a String DataType
message = 'abc';

// .endsWith(STRING) works with only strings types and Not an Object with type 'any'
// <string> explictly tells the TypeScript complier that the varible is a "string" DataType

// option 1 for type assertion: (<string> message)
// option 2 for type assertion: (message as string)

// option 1
let endsWithC = (<string>message).endsWith('c');

// option 2
let alternativeWay = (message as string).endsWith('c');
