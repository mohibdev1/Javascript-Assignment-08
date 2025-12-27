// Q1
document.write("<h2>Chp:31 to 34 Q1</h2>");
var todayDate = new Date ();
document.write(todayDate + "<br><br>");

// Q2
var now = new Date();

var months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

var currentMonth = months[now.getMonth()];
alert(" Q2: Current month : " +currentMonth);

// Q3
var todayDate = new Date();

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var currentDay = days[todayDate.getDay()];
alert("Q3: Today is : " +currentDay);

// Q4
 var today = new Date();
var day = today.getDay(); // 0 = Sunday, 6 = Saturday

if (day === 0 || day === 6) {
  alert("Q4: It's Fun day");
}

// Q5
var today = new Date();
var currentDate = today.getDate();
if (currentDate < 16) {
  alert("Q5: First fifteen days of the month");
} else {
  alert("Q5: Last days of the month");
}

// Q6
document.write("<h2>Chp:31 to 34 Q6</h2>");
var now = new Date();

document.write("Current Date: " + now + "<br>");

elapsedMilliseconds = now.getTime();  
document.write("Elapsed milliseconds since January 1, 1970: " + elapsedMilliseconds + "<br>");

elapsedMinutes = elapsedMilliseconds / (1000 * 60);
document.write("Elapsed minutes since January 1, 1970: " + elapsedMinutes + "<br><br>");

// Q7
var now = new Date();
var hours = now.getHours(); // 0-23

if (hours < 12) {
  alert("Q7: It's AM");
} else {
  alert("Q7: It's PM");
}

// Q8
document.write("<h2>Chp:31 to 34 Q8</h2>");
var laterDate = new Date(2020, 11, 31);
document.write("Later date: " + laterDate + "<br><br>");

// Q9
// Pehla Ramadan
var firstRamadan = new Date("June 18, 2015");

// Aaj ki date
var today = new Date();

// Difference in milliseconds
var difference = today - firstRamadan;

// Convert milliseconds to days
var daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));

alert("Q9: Days passed since 1st Ramadan: " + daysPassed);

// Q10
document.write("<h2>Chp:31 to 34 Q10</h2>");
// Reference date
var referenceDate = new Date("December 5, 2015 22:50:16");

// Beginning of 2015
var beginning2015 = new Date("January 1, 2015 00:00:00");

// Difference in milliseconds
var difference = referenceDate - beginning2015;

// Convert milliseconds to seconds
var secondsElapsed = Math.floor(difference / 1000);

// Display in browser
document.write("On reference date " + referenceDate + ", " + secondsElapsed + " seconds had passed since beginning of 2015" +"<br><br>");

// Q11
document.write("<h2>Chp:31 to 34 Q11</h2>");
 var now = new Date();
    document.write("Current date: " + now + "<br>");

    // Extract hours
    var hours = now.getHours();

    // Set time one hour ahead
    now.setHours(hours + 1);
    document.write("1 hour ahead, it will be: " + now +"<br><br>");

//    Q12
 var date = new Date();
    alert("Q12: Current date: " + date);

    // Set date 100 years back
    date.setFullYear(date.getFullYear() - 100);
    alert("Q12: 100 years back, it was: " + date);

    // Q13
    document.write("<h2>Chp:31 to 34 Q13</h2>");
     var age = +prompt("Q13: Enter your age:");

  // Get current year
  var currentYear = new Date().getFullYear();

  // Calculate birth year
  var birthYear = currentYear - age;

  // Display results
  document.write("Your age is " + age + "<br>");
  document.write("Your birth year is " + birthYear + "<br><br>");

//   Q14
document.write("<h2>Chp:31 to 34 Q14</h2>");
var customerName = "ABC Customer";
var units = 410;
var chargesPerUnit = 16;
var latePaymentSurcharge = 350;

// Get Current Month
var date = new Date();
var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var currentMonth = monthNames[date.getMonth()];

// Calculations
var netAmount = units * chargesPerUnit;
var grossAmount = netAmount + latePaymentSurcharge;

// Round to 2 decimal places
netAmount = netAmount.toFixed(0);
grossAmount = grossAmount.toFixed(0);
latePaymentSurcharge = latePaymentSurcharge.toFixed(0);

// Display Output in Browser
document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: <b>" + customerName + "</b><br>");
document.write("Month: <b>" + currentMonth + "</b><br>");
document.write("Number of Units: <b>" + units + "</b><br>");
document.write("Charges per Unit: <b>" + chargesPerUnit + "</b><br><br>");

document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b><br>");
document.write("Late Payment Surcharge: <b>" + latePaymentSurcharge + "</b><br>");
document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b><br>");