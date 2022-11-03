

function changeBGcolor() {
    document.getElementById('demo').style.backgroundColor = 'aquamarine';
}

/*

function name(parameter){
    //some codes
}


*/

//condition ? exprIfTrue : exprIfFalse
// if(condition){
    //execute if the condition is true
// }else{
    //execute if the condition is false
// }
let num1 = 11;
if((num1 % 2) == 0){
console.log(num1 + " is an EVEN number");
}else{
    console.log(num1 + " is an ODD number");
}

function myFunction() {
    let text;
    if (confirm("Press a button!") == true) {
        text = "You pressed OK!";
    } else {
        text = "You canceled!";
    }
// condition ? exprIfTrue : exprIfFalse
    //ternary sample
    // confirm("Press a button!") == true ? text = "You pressed OK!" : text = "You canceled!";
    
    document.getElementById('demo').innerHTML = text;
    
}
console.log(true != false); //true !yes
console.log(false == true); //false

//variables
//var
//let
//const
var name = "juan";
let fname = "juan";
const lname = 1231;
var a = true;

//   Basic Operators  
//   + Addition  
//   - Subtraction  
//   * Multiplication  
//   / Division   
//   % Modulus (remainder)  
//   ++ Increment numbers  
//   -- Decrement numbers

console.log(5-2);
console.log(5*2);
console.log(5/2);
console.log(5%2);
console.log(6%2);

// Comparison Operators  
// == Equal to  
// === Equal value and equal type  
// != Not equal  
// !== Not equal value or not equal type  
// > Greater than  
// < Less than  
// >= Greater than or equal to  
// <= Less than or equal to  
// ? Ternary operator
// condition ? exprIfTrue : exprIfFalse

console.log(1 == "1"); //true
console.log(1 === "1"); //false
console.log(3 > 2); //false
console.log("2 >= 2 is "+ (2 >= 2)); //false
console.log(1 < 2); //false
console.log(1 <= 2); //false