/*  JS "implicitly" converts objects to be compatible to an operation.

Implicit type conversion
I can add a string to a number or a boolean to a string? 

*/

console.log("true" + "true"); // JS converted the boolean value to s string and concatenated it with a string "TRUE",boolean value TRUE was 'Implicitly' converted to a string. 
console.log("Ben&Jerrys" + 2); // adding number 2 to a string "Ben&Jerrys"
console.log(2 * true); // we used the operator to multiply, but the multiply integer 2 with a boolean value maybe you would expect the result to be TRUE TRUE but JS converted TRUE to 1 and multiplied it by 2.
console.log("2" + 5); // adding number 5 to a string "2" maybe you would expect a string to be converted to an 'integer' but NO,JS converted the 'integer' to a string, the expression was treated as if it was written "2" + 5 and thats why the result is "25".
console.log("string" * 3); // strings can not be multiplied by a number, the result is Not A Number (NAN). 