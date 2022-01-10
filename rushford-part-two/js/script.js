/*
Step 1: ask user for name
    + store in variable ("name")
Step 2: ask "name" for # of holes to play (3 or 6), 
    + store in variable ("number")
Step 3: loop "number" times
    - ask user for number of putts w/ hole #
    - add that number to the total
    - Google "how to add numbers together"
    *Total grows as it loops
Step 4: print in console.log w/ "name" the difference between the course par and the user's score
    - 3 holes, par is 9; 6 holes, par is 18;
        If total is (>0), then over par message +
        If total is (<0), then under par message -
        If total is (=0), then even with par message 0
*/

var name = window.prompt("Welcome to GC mini-golf! What is your name?");

var number = prompt ("Hi " + name + "! Would you like to play 3 or 6 holes?");

let total = 0;

let holenumber = 1;

for (let i = 0; i < number; i++ ) {
  let putts = Number(prompt("How many putts for hole " + holenumber++ + "? (par: 3)"));
  total += putts;
}

let total2 = total-9;
let total3 = total-18;

if (number == 3) {

    if(total2 >0) {
        console.log("Nice try, " + name + "... Your total par was: +" + total2 + ".");
    }
    if(total2 <0) {
        console.log("Great job, " + name + "! Your total par was: " + total2 + ".");
    }
    if(total2 ==0) {
        console.log("Good game, " + name + ". Your total par was: 0.");
    }
} else if (number == 6) {

    if(total3 >0) {
        console.log("Nice try, " + name + "... Your total par was: +" + total3 + ".");
    }   
    if(total3 <0) {
        console.log("Great job, " + name + "! Your total par was: " + total3 + ".");
    }
    if(total3 ==0) {
        console.log("Good game, " + name + ". Your total par was: 0.");
    }
}
