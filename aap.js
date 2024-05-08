var first = document.getElementById("first")
var date = new Date();
var now = date.getDay();
var weekDays;

switch (now) {
    case 0:
        weekDays = "Sunday"; 
        break;
    case 1:
        weekDays = "Monday";
        break;
    case 2:
        weekDays = "Tuesday"; 
        break;
    case 3:
        weekDays = "Wednesday"; 
        break;
    case 4:
        weekDays = "Thursday"; 
        break;
    case 5:
        weekDays = "Friday"; 
        break;
    case 6:
        weekDays = "Saturday"; 
        break;
    default:
        break;
}
var hours = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;
minutes = minutes < 10 ? '0' + minutes : minutes;
var time = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
first.innerHTML ="Today is "+weekDays+ "<br>" +" Current time is :"+time
var second = document.getElementById("secend");
var currentDate = new Date();


var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();


var mmddyyyy = month + '-' + day + '-' + year;
var ddmmyyyy = day + '-' + month + '-' + year;

var mmddyyyy = month + '/' + day + '/' + year;
var ddmmyyyy = day + '/' + month + '/' + year;
second.innerHTML = "mm-dd-yyyy: " + mmddyyyy +"<br>"+ "mm/dd/yyyy: " + mmddyyyy +"<br>"+"dd-mm-yyyy: " + ddmmyyyy + "<br>"+ "dd/mm/yyyy: " + ddmmyyyy

var third = document.getElementById("third");
var result = "";

for (var year = 2024; year <= 2050; year++) {
    var janFirst = new Date(year, 0, 1);
    
    if (janFirst.getDay() === 0) {
        result += "Sunday January 1st, " + year + "<br>";
    }
}
third.innerHTML = result;
function game() {
    var randomNumber =Math.random()*10
    var fix = randomNumber.toFixed(0)
    var userGuess = prompt("Guess a number between 1 and 10:");
    if (userGuess == fix) {
        alert("Good Work!");
    } else {
        alert("Not matched. The correct number was " + fix + ".");
    }
}
var fifth = document.getElementById("fifth");
var currentDate = new Date();
var targetDate = new Date(2024, 7, 14 ); 
console.log(targetDate);
var timeDifference = targetDate.getTime() - currentDate.getTime();
var daysLeft =timeDifference / (1000 * 60 * 60 * 24);
var daysfix = daysLeft.toFixed(0);
console.log(daysfix);
fifth.innerHTML = "There are " + daysfix + " days left before August 14th."




var Sixth = document.getElementById("Sixth");

function start() {
    function remove(str, char) {
        var new1 = str.substring(0, char);        
        var new2 = str.substring(char + 1, str.length);
        return new1 + new2;
    }

    var userInput = prompt("In 'Hello, World', specify the index number of the character you want to remove:"); 
    var indexToRemove = parseInt(userInput);

    Sixth.innerHTML = remove("Hello,World", indexToRemove);
}


var Seventh = document.getElementById("Seventh");
var Seventh2 = document.getElementById("Seventh");
const numberToCheck = 21; // Define the number to check outside the function
function test37(x) {
    return (x % 3 == 0 || x % 7 == 0);
}

if (test37(numberToCheck)) {
    Seventh.innerHTML =  `${numberToCheck} is a multiple of 3 or 7.`;
} else {
    Seventh2.innerHTML`${numberToCheck} is not a multiple of 3 or 7.`;
}
var Eighth = document.getElementById("Eighth");
function startsWithJava(str) {
    return str.startsWith('Java');
}
const inputString = "JavaScript";
Eighth.innerHTML = startsWithJava(inputString) ? "The string starts with 'Java'." : "The string does not start with 'Java'.";

var Ninth = document.getElementById("Ninth");
function isInRange50to99(num1) {
    return (num1 >= 50 && num1 <= 99)
}
const number1 = 55;
Ninth.innerHTML = isInRange50to99(number1); 


var Tenth = document.getElementById("Tenth")
function isInRange50to99(num4, num5, num6) {
    return (num4 >= 50 && num4 <= 99) || (num5 >= 50 && num5 <= 99) || (num6 >= 50 && num6 <= 99);
}

const number4 = 105;
const number5 = 40;
const number6 = 50;
Tenth.innerHTML = isInRange50to99(number4, number5, number6); 



