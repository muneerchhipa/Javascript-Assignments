// QNo1:
// var date = new Date();
// document.write(date);

// QNo2:
// var date = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// document.write("Current month: " + months[date.getMonth()])

// QNo3:
// var d = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// document.write("Today is " + dayNames[d.getDay()])

// QNo4:
// var date = new Date();
// var todayDay = date.getDay() 
// var dayNames = ["Sunday", "Monday", "Tueday", "Wednesday", "Thuday", "Friday", "Saturday"];
// if(todayDay === 0 || todayDayday === 6){
// document.write("Its a Fun Day bcz its " + dayNames[todayDay])
// }
// else{
//     document.write("Its a Normal Day")
// }

// QNo5:
// var date = new Date();
// var monthDate = date.getDate()
// if(monthDate <= 15){
//     document.write(`Today is ${monthDate} , First fifteen days of month`)
// }
// else{
//     document.write(`Today is ${monthDate} , Last fifteen days of month`)
// }

// QNo6:
// var date = new Date();
// var MilliSeconds = date.getTime()

// document.write("Current date: " + date + "<br>")
// document.write("Elapsed milliseconds since January 1 ,1970 : " + MilliSeconds + "<br>")
// document.write("Elapsed mi since January 1 ,1970 : " + MilliSeconds / (1000 * 60))

// QNo7:
// var date = new Date();
// var hours = date.getHours();
// if(hours >= 12 ){
//      console.log("It's " + hours +" PM")
// }
// else{
//     console.log("It's " + hours +" AM")
// }

// QNo8:
// var laterDate = new Date("December 31, 2020")
// console.log("Later date: " + laterDate)

// QNo9:
//  var date = new Date();
// var ramadanDate = new Date("February 28, 2025")
// var diff = date - ramadanDate;
// var daysAgo = diff/(1000 * 60 * 60 * 24)
// document.write(`${Math.floor(daysAgo)} days have passed away since 1 Ramadan 2025`)

// QNo10:
// var date = new Date();
// var startingDate = new Date("January 1, 2025")
// var diff =   date - startingDate ;
// var secondsAgo = diff/1000
// document.write("On refrence date "+ date + ", <br>" + Math.floor(secondsAgo) + "seconds has passed since 2025 beginning" )

// QNo11:
// var currentDate = new Date()
// var date = new Date();
// var currentHours = date.getHours()
// date.setHours(currentHours - 1)
// document.write(`Current date: ${currentDate} <br> 1 hours ago , it was ${date}  `)

// QNo12:
// var currentDate = new Date();
// var date = new Date();
// var currentYear = date.getFullYear()
// date.setFullYear(currentYear - 100)
// document.write(`Current date: ${currentDate} <br> 100 Years ago , it was ${date}  `)

// QNo13:
// var age = +prompt("Enter your age \n and see your birth year")
// var currentDate = new Date ().getFullYear();
// var birthYear = currentDate - age
// document.write(`Your age is ${age} <br> Your birth year is ${birthYear} `)


