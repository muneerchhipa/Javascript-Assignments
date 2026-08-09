// QNo1:
// var firstName = prompt("Enter the first name");
// var lastName = prompt("Enter the last name")
// var fullName = alert("Hi, " + firstName + lastName)

// QNo2:
// var mobilePhone = prompt("Enter your favourite mobile phone")
// document.write(`My favourite phone is: ${mobilePhone} <br>`)
// document.write(`Length of string: ${mobilePhone.length}`)

// QNo3:
// var str = "Pakistani"
// document.write(`String:${str} <br> Index of 'n': ${str.indexOf("n")}`)

// QNo4:
//  var str = "Hello World"
//  document.write(`String:${str} <br> Last index of 'l': ${str.lastIndexOf("l")}`)

// QNo5:
//   var str = "Pakistani"
//   document.write(`String:${str} <br> Character At index 3: ${str.charAt(3)}`)

// QNo6:
// var str1 = prompt("Enter the first name");
// var str2 = prompt("Enter the last name");
// var fullName = alert(str1.concat(str2));

// QNo7:
//   var city = "Hyderabad"
//   document.write(`City:${city} <br> After Replacement: ${city.replace("Hyder","Islam")}`)

// QNo8:
// var message = "Ali and Sami are best friends. they play cricket and football together "
// document.write(`${message.replaceAll("and","&")}`)

// QNo9:
// var str = "472";
// var num = Number(str);
// document.write(`Value:${str} <br> Type:${typeof(str)}<br> Value:${num} <br> Type:${typeof(num)}`)

// QNo10:
var userInput = prompt("Enter the word you need in uppercase");
var res = userInput.toUpperCase()
document.write(`User input: ${userInput} <br> Upper case: ${res}`)

// QNo11:
// var userInput = prompt("Enter the word you need in uppercase");
// var res = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase()
// document.write(`User input: ${userInput} <br> Title case: ${res}`)

// QNo13:
    // var username = prompt("Enter your username:");
    // var invalid = false;
    // for (var i = 0; i < username.length; i++) {
    //   var code = username.charCodeAt(i);  // character ka ASCII code
    //   if (code === 33 || code === 44 || code === 46 || code === 64) {
    //     invalid = true;
    //     break;
    //   }
    // }
    // if (invalid) {
    //   alert("Please enter a valid username");
    // } else {
    //   alert("Username accepted: " + username);
    // }
  
// QNo14:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter the item search for")

// let found = false;
// for(var i=0; i<=A.length; i++){
// if(A[i]===userInput.toLowerCase()){
// found = true;
// break;
// }
// }
// if(found){
//     alert(userInput + " is available at index " + i + " in our bakery")
// }else{
//     alert("We are sorry " + userInput + " is available not in our bakery")
// }

// QNo15:




// QNo16:
// var university = "University Of Karachi";
// var uniArr = university.split("");
// console.log(uniArr)

// QNo17:
// var str = "Pakistan"
//  document.write(`String:${str} <br> Last Character of input: ${str.slice(-1)}`)

// QNo18:
// var text = "The quick brown fox jumps over the lazy dog"
// var word = prompt("Select the word")
// var count = text.toLowerCase().split(word).length-1
// document.write(`${text} <br> There are ${count} occurecees of the word '${word}'`)