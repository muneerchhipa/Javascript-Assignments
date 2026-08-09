// QNo1:
// var num = parseFloat(prompt("Enter the positive integer"));

// document.write(`Number : ${num} <br> 
//     Round off value : ${Math.round(num)} <br>
//  Floor Value : ${Math.floor(num)} <br>
//   Ceil Value : ${Math.ceil(num)}`)

// QNo2:
// var num = parseFloat(prompt("Enter the negative integer"));

// document.write(`Number : ${num} <br> 
//     Round off value : ${Math.round(num)} <br>
//  Floor Value : ${Math.floor(num)} <br>
//   Ceil Value : ${Math.ceil(num)}`)

// QNo3:
// var userInput = parseInt(prompt("Find the absolute value of the number "))
// document.write(`The Absolute value of ${userInput} is ${Math.abs(userInput)}`)

// QNo4:
// document.write(`Random dice value is : ${parseInt(Math.random()*6+1)}<br>`)
// document.write(`Random dice value is : ${parseInt(Math.random()*6+1)}`)

// QNo5:
// var toss = Math.floor(Math.random() * 2) + 1;
// if (toss === 1) {
//     document.write(toss + "<br>Random Coin Value: Tails");
// } else {
//     document.write(toss + "<br>Random Coin Value: Heads");
// }

// QNo6:
// document.write(`Random number between 1 and 100 : ${parseInt(Math.random()*100)}`)

// QNo7:
//Smj nhi aaraha!!!

// QNo8:
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userInput = Number(prompt("Guess the Secret Number from (1-10)"))
if (secretNumber === userInput) {
    alert("Congrats! You Guess the Number")
}
else {
    alert("Sorry! You Guess the wrong number, Guess again \nThe number is " + secretNumber)

}
