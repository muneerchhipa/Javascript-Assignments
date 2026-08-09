// QNo1:
// function currentDateAndTime(){
//     var date = new Date()
//     document.write(date)
// }
// currentDateAndTime();

// QNo2:
// function fullName (firstName,lastName){
// var fullName = firstName + " " + lastName
// return fullName;
// }
// var greet = fullName("Muneer","Usman")
// alert("Hi, "+ greet)

// QNo3:
// function sum(num1,num2){
//    var num1 = Number(prompt("Enter First number"))
//    var num2 = Number(prompt("Enter Second number"))
//    var sum = num1 + num2
//    return  num1 + " + " + num2 + " = " + sum; 
// }
// var result = sum()
// alert(result)

// QNo4:
// function calculator (num1,operator,num2){
// var num1 = Number(prompt("Enter First number"))
// var operator = prompt("select the operator")
// var num2 = Number(prompt("Enter Second number"))
// if(operator==="+"){
//     var sum = num1+num2;
//     return sum;
// }
// else if(operator==="-"){
//        var subtract = num1-num2
//        return subtract;
       
// }
// else if(operator==="*"){
//        var multiply = num1*num2
//        return multiply;
       
// }
// else if(operator==="/"){
//        var divide = num1/num2
//        return divide;      
// }
// else{
//     return "Incorrect Operator";
// }

// }
// var result = calculator();
// alert(result)

// QNo5:
// function square (num){
//     var num = Number(prompt("Enter number"))
//     var number = num * num;
//     return number;
// }
// var result = square();
// alert(result)

// QNo6:
// function factorial(num){
// var num = Number(prompt("Enter a Number"))

// if (num < 0) {
//         return "Factorial not defined for negative numbers!";
//     }
// var fact = 1
// for(i=1; i<=num;i++){
// fact = fact * i
// }
// return fact;

// }
// var result= factorial()
// alert(result)

// QNo7:
// function counting(){
//     var start = Number(prompt("Enter starting number"))
//     var end = Number(prompt("Enter ending number"))

//     document.writeln(`counting start from ${start} and end till ${end} <br>`)
// for(i=start; i<= end; i++)
//     document.writeln(i, "<br>")


// }
// counting();

// QNo8:
// function calculateHypotenuse() {
//     var base = Number(prompt("Enter the base of the triangle:"));
//     var perpendicular = Number(prompt("Enter the perpendicular of the triangle:"));
//     function calculateSquare(num) {
//         return num * num;
//     }
//     var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     document.write(
//         "Base: " + base + "<br>" +
//         "Perpendicular: " + perpendicular + "<br>" +
//         "Hypotenuse: " + hypotenuse
//     );
// }

// calculateHypotenuse();


// QNo9:
// function rectArea (width,length){

//     var area = width * length;
//     document.write("Width: " + width + "<br>");
//     document.write("Length: " + length + "<br>");
//     document.write("Area of Rectangle: " + area + "<hr>");
    
// }
// rectArea(2,5);

// function rectArea (w,l){

//     var w = 8;
//     var l = 6;

//     var area = w * l;
//     document.write("Width: " + w + "<br>");
//     document.write("Length: " + l + "<br>");
//     document.write("Area of Rectangle: " + area + "<hr>");
    
// }
// rectArea();




// Palindrome word ==> civic ==> civic

// take input from user (Done)
// reverse the input 
// check the reverse word with the userInp
// show the output

// console.log("document  ==>", document);


// function checkPalindrome() {
//   var userInp = document.getElementById("userInp").value;
//   var reverse = ""
//   console.log("userInp ==>", userInp);

//   for (var i = userInp.length - 1; i >= 0; i--) {

//     console.log("i ==>", userInp[i]);
//     // reverse += userInp[i]
//     reverse = reverse + userInp[i]
//   }

//   console.log("reverse ==>", reverse);

//   if (userInp === reverse) {
//     document.write("It is a palindrome word")
//   } else {
//     document.write("It is not a palindrome word!")
//   }
// }

// var arr = [3, 6, 5, 2, 1, 9, 7, 8];
// var min = arr[0] // 3

// for (var i = 0; i < arr.length; i++) {
//   console.log("min ==>", min);
//   console.log("currentElement ==>", arr[i]); // arr[0] (3), arr[1] (6)
//   if (arr[i] < min) {
//     min = arr[i]
//   }
// }

// console.log("min ==>", min);

// var arr = ["This", "is", "Pakistan"] // This is Pakistan


// function myFunction(waqar) {
//   // var text = arr[0];
//   // for (var i = 1; i < arr.length; i++) {
//   //   text = text + separator + arr[i]
//   // }

//   // return text;
//   var text = "";
//   for (var i = 0; i < arr.length; i++) {
//     if (i === 0) { 
//       text = text + arr[i] //text = "" + This == This
//     } else {
//       text = text + waqar + arr[i];
//     }

//   }

//   return text;
// }

// var result = myFunction("+++++");

// console.log("result ==>", result);


// // console.log("text ==>", text);

// console.log("result ==>", arr.join());

// function fifo() {
//   var userInp = document.querySelector(".userInp").value;
//   var arr = userInp.split(",")
//   var output = document.getElementById("output");

//   for (let i = 0; i < arr.length; i++) {
//     var element = arr[i];
//     console.log("element ==>", element);
//     // output.innerHTML = "<b>" + element + "</b>"
//     // output.innerText += element
//     output.innerText = output.innerText + " " + element

//   }
// }

function convertToUppercase() {
  var userInp = document.getElementById("userInp").value;
  // bilal-sudias-rehman
  if (userInp == "") {
    alert("kuch na kuch likh")
  } else {
    var arr;
    if (userInp.includes(" ")) {
      arr = userInp.split(' ');
    } else if (userInp.includes("-")){
      arr = userInp.split("-")
    } else if (userInp.includes("+")) {
      arr = userInp.split("+")
    }

    var outputPara = document.getElementById("outputPara");
    outputPara.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
      var element = arr[i].toUpperCase();
      console.log("element ==>", element)
      // outputPara.innerHTML += "<b>" + arr[i] + "</b> </br>"
      outputPara.innerHTML = outputPara.innerHTML + "<b>" + element + "</b></br>"
    }
  }
}
