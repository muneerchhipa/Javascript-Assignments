// // Object
// // key = properties / value = data or functions pair 
// let person = {
//     name : 'muneer',
//     age : 18,
//     gender : 'male',
//     greet : function(){
//         console.log(`Hello ${this.name}`);
//         // this refers to the current object yani is ki baat horhi hai
//     }
// }
// console.log(person.name)
// console.log(person.age)
// person.greet();


// // Class 
// // class is a blueprint for object yani aik method
// // ham aik blueprint banate hai phr usko bar bar use krte hai
// // for e.g muneer ki alg ahsan ki alg
// // first letter of class is Capital ..Person
// class Person {
// // constructor mai properties initialize krni hoti hai
//     constructor(name,age,gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     // its a method => greet()
//     greet(){
//         console.log(`Hello iam ${this.name} and i am ${this.age} years old`)
//     }
// }

// // new se object create hojata hai class se taake alg alg use krsake 
// // methods share hojaate hai
// // for muneer 
// let muneer = new Person("Muneer",18,"male")
// muneer.greet();
// console.log('Age =>',muneer.age)
// console.log('Gender =>', muneer.gender)

// //  for ahsan and soo on
// let ahsan = new Person ('ahsan',19,'male')
// ahsan.greet(); 


// // *************  OOPS ************ 
// // There are Four fundamental/Pilars of Oops 
// // 1.Inheritance (re useability using super and extends) =>Parent se cheezen lena
// // 2.Polymorphism (Flexibility) =>Same method, different behavior
// // 3. Encapsulation (Protected) => data ko lock karna
// // 4.Abstraction (Logic hidden)


// // Inheritance
// // aik child class banti hai aur wo parent class ki cheezen use krt hai
// // child ko dobara likhne ki zarorat nhi hoti parent se hi extend hojati

// // Parent Class 
// // isme iske pass 3 prop hai name, age , hobby 
// // method => greet()
// class Person {
//     constructor(name, age, hobby) {
//         this.name = name;
//         this.age = age;
//         this.hobby = hobby;
//     }
//     greet() {
//         console.log(` parent => hi my name is ${this.name} and i like to play ${this.hobby}`)
//     }
// }
// // let muneer = new Person ("muneer",18,"cricket")
// // muneer.greet();

// // ab isko extend karenge 
// // extends=> matlb person ki saari cheezen lelo name,age,hooby 
// class Student extends Person {
//     constructor(name, age, hobby, course) {
//         super(name, age, hobby)
//         // super likhna lazmi hota hai mtlb ke person m jao aur
//         // constructor chalao usko call karo name,age,hobby ko set karo
//         this.course = course;
//     }
//     // Student ka apna method call hoga yani child ka
//     study() {
//         console.log(`My name is ${this.name} i am ${this.age} years old i am learning ${this.course}`)
//     }
// }

// let ali = new Student("Ali", 20, "Cricket", "JavaScript");
// ali.study();// ya Study wala hai yani child extends wala 
// ali.greet(); // ye sirf Person wala hai yani Parent wala



// // ************Polymorphism************
// // same method hota hai lekin different behaviours hote hai 
// // aik hi kaam lekin har class apne tariqe se kare

// // animal parent class hai is me aik method hai speak
// class Animal{
//     speak(){
//         console.log(`Animal makes a sound`)
//     }
// }
// // same method name speak() behaviour change output alg
// class Dog extends Animal {
//     speak(){
//          console.log(`Dog Barks`)
//     }
// }
// class Cat extends Animal {
//     speak(){
//         super.speak(); // parent method bhi run karega super ki wjh se
//          console.log(`Cat meaows`)
//     }
// }

// let animal = new Animal();
// let dog = new Dog();
// let cat = new Cat();

// animal.speak(); // Animal makes a sound
// dog.speak();    // Dog barks
// cat.speak()     // Cat meows

// // yehi polymorhism hai methods same but object decide krta hai kya run hoga
// // e.g mobile ringtone of samsung and apple 
// // buttons same but result different  

// // Example of Polymorphism
// class Payment {
//   pay() {
//     console.log("Payment method");
//   }
// }

// class Easypaisa extends Payment {
//   pay() {
//     console.log("Paid via Easypaisa");
//   }
// }

// class JazzCash extends Payment {
//   pay() {
//     console.log("Paid via JazzCash");
//   }
// }

// let payments = [new Easypaisa(), new JazzCash()];

// payments.forEach( function(p){
//     p.pay();
// });


// ***************Encapsulation***************
// Encapsulation = Private data + Public functions
// Data ko direct access hone se rokta hai simple protect krta hai
// aur function ke zariye use krn deta hai
// e.g ATM machine khud khol kr paise nhi daal skte balance ko change nh kr skte
// withdraw button use krte hai check balance btn use krte h

// class BankAccount{
// // #balance = ATM ke andar ka paisa
//     #balance = 500;//hidden or private (#)

// addMoney(amount){
//     // addMoney() = ATM ka button
//     this.#balance += amount;
// }

// showBalance(){
//     // showBalance() = ATM screen
//     return this.#balance
// }

// }

// let muneerAcc = new BankAccount();
// muneerAcc.addMoney(500);
// console.log(muneerAcc.showBalance());


// // Tum andar ka data nahi,
// // sirf buttons (methods) use kar sakte ho


// // e.g 
// class Admin {
//   #password

//   constructor(password) {
//     this.#password = password
//   }

//   login(password) {
//     return password === this.#password
//   }
// }

// const admin1 = new Admin("Muneer@123");
// console.log(admin1.login("Muneer@123"));//true
// console.log("admin1 ==>", admin1.password);//due to protection show nhi hoga


// ****************Abstraction**************
// User ko sirf function / button dikhta hai
// Andar ka logic chhupa hota hai
// Abstraction user ko confusion se bachata hai
// Logic hidden = Abstraction

// Tum:
// Sirf Camera open karte ho  Capture dabate ho
// Tumhein nahi pata: 
// focus kaise hua
// lens kaise move hui
// image processing kaise hui
// Capture button = Abstraction

// class LoginSystem {
//   login(password) {
//     let storedPassword = "1234";
//     return password === storedPassword;
//   }
// }

// let user = new LoginSystem();
// console.log(user.login("1234") );


// ********************************************************************

// // example jis mai 4 pillar use horhy oops ke

// // =====================
// // ABSTRACTION (Base Rule Class)
// // =====================
// class LoginBase {

//   //  ABSTRACTION:
//   // Ye sirf rule define karta hai
//   // Child class ko login() banana hi hoga
//   login() {
//     throw new Error("Please implement login()");
//   }
// }

// // =====================
// // INHERITANCE + ENCAPSULATION
// // =====================
// class Admin extends LoginBase {   //  INHERITANCE

//   #password;  // ENCAPSULATION (private data)

//   constructor(password) {
//     super();  //  Parent (LoginBase) ka constructor call
//     this.#password = password; //  private data set
//   }

//   //  POLYMORPHISM:
//   // Same method name "login"
//   // But Admin ka apna behavior
//   login(password) {
//     return password === this.#password;
//   }
// }

// // =====================
// // INHERITANCE + ENCAPSULATION
// // =====================
// class User extends LoginBase {    //  INHERITANCE

//   #pin;  //  ENCAPSULATION (private data)

//   constructor(pin) {
//     super();  //  Parent ka constructor call
//     this.#pin = pin;
//   }

//   // POLYMORPHISM:
//   // Same method name "login"
//   // But User ka different behavior
//   login(pin) {
//     return pin === this.#pin;
//   }
// }

// // =====================
// // OBJECT CREATION
// // =====================
// const admin = new Admin("admin123");
// const user = new User("1111");

// // =====================
// // METHOD CALLS (Polymorphism in action)
// // =====================
// console.log(admin.login("admin123")); // true
// console.log(admin.login("wrong"));    // false

// console.log(user.login("1111"));      // true
// console.log(user.login("0000"));      // false

//                 X--------------------X 



// Class 27


// function Student(name, className) {
//   this.name = name;
//   this.className = className;
//   this.getDetails = function () {
//     return name + ", " + className
//   }
// }
// let muneer = new Student("Muneer","JS")
// console.log(muneer.getDetails());

// console.log("window ==>", location.pathname);

// function reloadFunc() {
//   location.reload();
// }





// Class 28

// var dummyWindow = window.open("", 'mywindow', "width=1100,height=380");
// var fristName = "Huzaifa"
// var lastName = "Khan"
// var dummyWindowContent = `
//   Kiya app apna kad bara karna chahte hain, tu abhi ${fristName} ${lastName} se rabta karain...
// `
// dummyWindow.document.writeln(dummyWindowContent)


function checkForSelection() {
  var cities = document.getElementById("cities");

  if (cities.selectedIndex == 0) {
    alert("Please select a city!")
  } else {
    console.log("check ==>", cities);
  }
}
