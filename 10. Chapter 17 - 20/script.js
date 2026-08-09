// QNo1:
// var multiDimentionalArr = [[],[],[]];

// QNo2:
// var matrix = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1]
// ];
// console.log(matrix)

// QNo3:
// for(i=1; i<=10; i++){
//     console.log(i);
// }

// QNo4:
// var table = prompt("Enter a number to show its multiplication table")
// var tableLength = prompt("Enter the table length")
// for(i=1; i<=tableLength; i++){
//     console.log(table + "x" + i + "=" + (table*i));
// }

// QNo5:
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for(i=0; i<fruits.length; i++){
//     console.log("Elements at index " + i + " is "  + fruits[i])
// }

// QNo6:
// a.counting 1 to 15
// console.log("a. Counting: ")
// for(var i=1; i<=15; i++){
//     console.log(i);
// }
// //b. reverse counting 10-1
// console.log("\n b.reverse counting")
// for(var i =10; i>=1; i--){
//     console.log(i);
// }

// //c. Even numvbers 0-20
// console.log("\n c. Even:")
// for(var i=0; i<=20; i=i+2){
//     console.log(i);
// }

// //d. odd numvbers 1-19
// console.log("\n d. Odd:")
// for(var i=1; i<=19; i+=2){
//     console.log(i);
// }

// //e. Series numvbers 2k-20k
// console.log("\n e. Series:")
// for(var i=2; i<=20; i+=2){
//     console.log(i + "k");
// }

// QNo7:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter the item search for")

// let found = false;
// for(var i=0; i<=A.length; i++){
// if(A[i]===userInput){
// found = true;
// break;
// }
// }
// if(found){
//     alert(userInput + " is available at index " + i + " in our bakery")
// }else{
//     alert("We are sorry " + userInput + " is available not in our bakery")
// }

// QNo8:
// var A = [24,53,78,91,12];
// var largestNum = A[0];
// for(var i=0; i<A.length; i++){
//     if(A[i]> largestNum){
//         largestNum = A[i];
//     }
// }
// console.log("Array items: "+ A.join(","));
// console.log("The Largest Number is " + largestNum);

// QNo9:
var A =[24,53,78,91,12];
var smallestNumber = A[0];
for(var i=0; i<=A.length; i++){
    if(A[i]<smallestNumber){
        smallestNumber = A[i]
    }
}
console.log("Array items: "+ A.join(","));
console.log("The Smallest Number is " + smallestNumber);


// QNo10:
// for(var i=5; i<=100; i+=5){
//     document.write(i+", ")
// }