// Declares a variable life assigned 100 then reduce it to 25. Fnally log it to console.
let life = 100;
life -= 25;
console.log(life);

// Function which check age>=18 and return True or False according to is major or not.
function isMajor(age){
    console.log(age>=18 ? "True" : "False")
}
isMajor(15);

//FizzBuzz
for(let i=1; i < 21; i++) {
    if (i % 3 === 0){
        console.log("Fizz");
    }else if (i % 5 === 0) {
        console.log("Buzz");
    }else {
        console.log(i);
    }
}