// The `if` structure works as you'd expect.
var count = 1;
if (count === 3){
    // evaluated if count is 3
} else if (count === 4){
    // evaluated if count is 4
} else {
    // evaluated if it's not either 3 or 4
}

// As does `while`.
while (true){
    // An infinite loop!
}

// Do-while loops are like while loops, except they always run at least once.
var input;
do {
    input = getInput();
} while (!isValid(input))

// The `for` loop is the same as C++ and Java:
// initialisation; continue condition; iteration.
for (var i = 0; i < 5; i++){
    // will run 5 times
}

// && is logical AND, || is logical OR
if (house.size === "big" && house.colour === "blue"){
    house.contains = "bear";
}
if (colour === "red" || colour === "blue"){
    // colour is either red or blue
}

// The `switch` statement checks for equality with `===`.
// use 'break' after each case 
// or the cases after the correct one will be executed too. 
grade = 'B';
switch (grade) {
  case 'A':
    console.log("Great job");
    break;
  case 'B':
    console.log("OK job");
    break;
  case 'C':
    console.log("You can do better");
    break;
  default:
    console.log("Oy vey");
    break;
}