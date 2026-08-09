// QNo6:
// let english = Number(prompt("Enter English Marks"));
// let urdu = Number(prompt("Enter Urdu Marks"));
// let maths = Number(prompt("Enter Maths Marks"));

// let totalMarks = 300;
// let obtainedMarks = english + urdu + maths;
// let percentage = (obtainedMarks / totalMarks) * 100;
// let grade;
// if (percentage >= 80) {
//     grade = "A-one";
// } else if (percentage >= 70) {
//     grade = "A";
// } else if (percentage >= 60) {
//     grade = "B";
// } else {
//     grade = "Fail";
// }

// document.write("<h1>","Marksheet ","</h1>", "<br>")
// document.write("English: " , english, "<br>");
// document.write("Urdu: " , urdu, "<br>");
// document.write("Maths: " , maths, "<br>");
// document.write("Total Marks: " , totalMarks, "<br>");
// document.write("Obtained Marks: " , obtainedMarks, "<br>");
// document.write("Percentage: " , percentage.toFixed(2) , "%", "<br>");
//  document.write("Grade: " , grade);

// QNo7:
// var secretNum = 7;
// var guessNum = Number(prompt("Guess the number from (1-10)"));

// if(secretNum === guessNum){
//     document.write("Bingo! Correct Answer")
// }
// else if(guessNum === secretNum + 1 || guessNum === secretNum - 1 ){
//     document.write("Close enough to the correct answer")
// }
// else{
//  document.write("you guessed worng , guess again")
// }

// QNo11:
var selectOperation = Number(prompt("Select an operation: \n 1.Addition (+) \n 2.Subtraction (-) \n 3.Multiplication (*) \n 4.Division (/) \n 5.Modulus (%) \n 6.Exit"));

if (selectOperation === 6){
    alert("Exiting The Calculator , GoodBye!")
}
else if(selectOperation >= 6){
    alert("Enter Number from (1-6) For Further Operation")
}

else{
var firstNumber = Number(prompt("Enter the First number:"));
var secondNumber = Number(prompt("Enter the Second number:"));



if(selectOperation === 1){
var addition = firstNumber + secondNumber;
alert("Result: " + firstNumber + " + " + secondNumber + " = " + addition);
}

if(selectOperation === 2){
var subtraction = firstNumber - secondNumber;
alert("Result: " + firstNumber + " - " + secondNumber + " = " + subtraction);
}

if(selectOperation === 3){
var multiplication = firstNumber * secondNumber;
alert("Result: " + firstNumber + " * " + secondNumber + " = " + multiplication);
}

if(selectOperation === 4){
var division = firstNumber / secondNumber;
alert("Result: " + firstNumber + " / " + secondNumber + " = " + division);
}

if(selectOperation === 5){
var modulus = firstNumber % secondNumber;
alert("Result: " + firstNumber + " % " + secondNumber + " = " + modulus);
}

else if(selectOperation >= 6){
    alert("write number from 1-6")
}
}
