//console.log("Hello World!\n==========\n");


console.log("EXERCISE 1:\n==========\n");
// Exercise 1 Section
/*function printOdd(count) {
    for (let i = 1; i < count; i++) {
    if (i % 2 == 1){
        console.log(i);
    } else {         //This and 
        continue;     //This is not needed - would be the same as Example 2 
    }                 // Save time if end at 9-console.log(i)
    }
}
printOdd(8) //this is count */

// Example 2
/* function printOdds (count) {
       for (let i = 1; i <= count; i++) {
       if (i % 2 == 1) {
           console.log(i);  
        }
        
    }
    
}
printOdds(500); */

// Example 3 with Bonus
function printOdds (count = 100) {
     for (let i = 1; i <= count; i++) {
     if (i % 2 == 1) {
        console.log(i);  
     }
     
 }
 
}
do{
    var userNumber = prompt("Please enter a number", 100);
} while (userNumber <= 0);

printOdds(userNumber); 



// Exercise 2 Section
//console.log("EXERCISE 2:\n==========\n");
/*
function checkAge(age, userName) {
    let aboveSixteen = `Congrates ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`;
       if (age >= 16) {
          console.log(aboveSixteen);
     } else {
             console.log(belowSixteen);
         }
         
}
*/

function checkAge(age = 15, name ="John Doe") {
    let aboveSixteen = `Congrats ${name}, You can drive`;
    let belowSixteen = `Sorry, ${name}, but you need to wait until you're sixteen`;
    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

//checkAge(21, "Tanner Riddle");

//or

do {
    var userAge = prompt("Please enter your age", 15);
} while (userAge <= 0);

checkAge(userAge);
