// QNo1:
// var studentNames =[];

// QNo2:
// var students = new Array(); 

// QNo3:
//var stringArray = ["apple" , "banana", "mango"];
// console.log(stringArray); 

// QNo6:
// var mixedArray = ["ahmed", 18, true, null];
// console.log(mixedArray);

// QNo7:
// var eduQualification = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M.Phil", "PhD"]  
// document.write("<h1>", "Qualifications" , "</h1>"); 
// document.write("1)", eduQualification[0], "<br>");
// document.write("2)", eduQualification[1], "<br>");
// document.write("3)", eduQualification[2], "<br>");
// document.write("4)", eduQualification[3], "<br>");
// document.write("5)", eduQualification[4], "<br>");
// document.write("6)", eduQualification[5], "<br>");
// document.write("7)", eduQualification[6], "<br>");
// document.write("8)", eduQualification[7], "<br>");

// QNo8:
// var stdNames = ["Muneer", "Irsam", "Umer"];
// var stdMarks = [230, 320 ,480];
// var totalMarks = 500;

// without loop..
// var std1 = (stdMarks[0]/totalMarks)*100;
// var std2 = (stdMarks[1]/totalMarks)*100;
// var std3 = (stdMarks[2]/totalMarks)*100;
// document.write("Score of ",stdNames[0]," is ", stdMarks[0], " .Percentage: ",std1,"%","<br>");
// document.write("Score of ",stdNames[1]," is ", stdMarks[1], " .Percentage: ",std2,"%","<br>");
// document.write("Score of ",stdNames[2]," is ", stdMarks[2], " .Percentage: ",std3,"%");

// with loop..
// for(var i=0; i<stdNames.length; i++){
//     var percentage = (stdMarks[i] / totalMarks)*100;

// document.write("Score of ",stdNames[i]," is ", stdMarks[i], " .Percentage: ",percentage,"%","<br>");
// }

// QNo9:
// var colors = ["Black", "Green", "Orange", "purple" ,"grey", "white", "golden", "mahroon"];
// document.write("<b>Initial Colors:</b>"+ colors + "<br><br>");

// part a
// var colorAtStart = prompt("Enter the color add at the beginning")
// colors.unshift(colorAtStart);
// document.write("After adding at the beginning : " + colors + "<br><br>")

// part b
// var colorAtEnd = prompt("Enter the color add at the end")
// colors.push(colorAtEnd);
// document.write("After adding at the end : " + colors + "<br><br>")

// part c
// colors.unshift("grey","silver");
// document.write("After adding 2 colors at the beginning : " + colors + "<br><br>")

// part d
// colors.shift();
// document.write("After deleting 1 colors at the beginning : " + colors + "<br><br>")

// part e
// colors.pop();
// document.write("After deleting 1 colors at the end: " + colors + "<br><br>")

// part f
// var indexToAdd = +prompt("At which index you want to add a color")
// var newColor = prompt("enter a new color");
// colors.splice(indexToAdd,0,newColor)
// document.write("After adding at index  " + indexToAdd + ": "+ colors + "<br><br>")

// part g
// var indexToDelete = +prompt("At which index you want to delete a color")
// var deleteCount = prompt("how many color you want to delete");
// colors.splice(indexToDelete,deleteCount)
// document.write("After adding  " + deleteCount + " colors from index " + indexToDelete  + " : "+ colors + "<br><br>")

// QNo10:
// var studentScores = [320,230,480,120]
// document.write("Scores Of Students : "+ studentScores+ "<br>")
// document.write("Odered Scores Of Students : "+ studentScores.sort())

// QNo11:
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta" , "Peshawar"]
// var selectedCities = cities.slice(2,4)
// document.write("Cities List : <br>" + cities + "<br>" +" <br>");
// document.write("Selected Cities List : <br>" + selectedCities)

// QNo12:
// var arr = ["This", "is", "my", "cat"];
// document.write("Array:" + "<br>" + arr + "<br>"+ "<br>")
// document.write("String:" +"<br>" +  arr.join(" "))

// QNo13:
// var FIFO = [];
// FIFO.push("Keyboard");
// FIFO.push("Mouse");
// FIFO.push("Printer");
// FIFO.push("Monitor");

// document.write("Devices: " + FIFO + "<br><br>");
// document.write("Out: " + FIFO.shift() + "<br>");
// document.write("Out: " + FIFO.shift() + "<br>");
// document.write("Out: " + FIFO.shift() + "<br>");
// document.write("Out: " + FIFO.shift() + "<br>");

// QNo14:
// var LIFO = [];
// LIFO.push("Keyboard");
// LIFO.push("Mouse");
// LIFO.push("Printer");
// LIFO.push("Monitor");

// document.write("Devices: " + LIFO + "<br><br>");
// document.write("Out: " + LIFO.pop() + "<br>");
// document.write("Out: " + LIFO.pop() + "<br>");
// document.write("Out: " + LIFO.pop() + "<br>");
// document.write("Out: " + LIFO.pop() + "<br>");


// QNo15:
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

//with loop
document.write("<select>")
for(i=0; i<phoneManufacturers.length; i++){
    document.write("<Option>"+ phoneManufacturers[i] +"</Option>")
}
document.write("</select>")

//without looping
// document.write("<select>");
// document.write("<option>" + phoneManufacturers[0] + "</option>");
// document.write("<option>" + phoneManufacturers[1] + "</option>");
// document.write("<option>" + phoneManufacturers[2] + "</option>");
// document.write("<option>" + phoneManufacturers[3] + "</option>");
// document.write("<option>" + phoneManufacturers[4] + "</option>");
// document.write("<option>" + phoneManufacturers[5] + "</option>");
// document.write("</select>");