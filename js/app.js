'use strict';

//Ask for the user's name
var username = prompt('Welcome to my site! What is your name?');
alert('Welcome to my site ' + username + '! To get us started, we are going to take a little quiz all about me.');

var correctAnswers = 0;
var totalQuestions = 7;

//Query the user: Am I married?
var maritalStatus = prompt('Am I married? (\'yes\' or \'no\')').toLowerCase(); // '\' used in order to enable the use of the single apostrophe.  This was done to make it more clear to the user which characters are permissible.

if (maritalStatus === 'yes' || maritalStatus === 'y') {
  alert('That is correct, I have been married for 11 years!');
  correctAnswers++;
}
else if (maritalStatus === 'no' || maritalStatus === 'n') {
  alert('I am in fact married');
} else {
  alert('You didn\'t even try!');
}
console.log('User\'s answer to my marital status: ' + maritalStatus);


//Query the user: Am I from the Northwest?
var originLocation = prompt('Am I from the Northwest? ("yes" or "no")').toLowerCase(); //Switched to double quotation marks here just to try a different way of including quotes without having to insert '\' multiple times.

if (originLocation === 'yes' || originLocation === 'y') {
  alert('That is correct! I am from the Northwest');
  correctAnswers++;
} else if (originLocation === 'no' || originLocation === 'n') {
  alert('Better luck next time!');
} else {
  alert('You didn\'t even try!');
}
console.log('User\'s response to origin location: ' + originLocation);

//Query the user: Did I go to college?
var collegeAttendance = prompt('Did I attend college? (\'yes\' or \'no\')').toLowerCase();

if (collegeAttendance === 'yes' || collegeAttendance === 'y') {
  alert('You are correct, I attended Franklin University Switzerland');
  correctAnswers++;
} else if (collegeAttendance === 'no' || collegeAttendance === 'n') {
  alert('Better luck next time!');
} else {
  alert('You didn\'t even try!');
}
console.log('User\'s entry for college attendance: ' + collegeAttendance);

//Query the user: Have I lived abroad?
var residence = prompt('Have I lived abroad? (\'yes\' or \'no\')').toLowerCase();

if (residence === 'yes' || residence === 'y') {
  alert('Yes that is correct! I have lived in ');
  correctAnswers++;
} else if (residence === 'no' || residence === 'n') {
  alert('Nice try, but no cigar!');
} else {
  alert('You didn\'t even try!');
}
console.log('User\'s response to residence location: ' + residence);

//Query the user: Do I have any children?
var numberOfChildren = prompt('Do I have any children? (\'yes\' or \'no\')').toLowerCase();

if (numberOfChildren === 'yes' || numberOfChildren === 'y') {
  alert('Nice! I do have two children: Reagan and Valerie');
  correctAnswers++;
} else if (numberOfChildren === 'no' || numberOfChildren === 'n') {
  alert('Better luck next time!');
} else {
  alert('You didn\'t even try!');
}
console.log('User\'s response to number of children: ' + numberOfChildren);

//Query to the user: What is my favorite number? This prompt will allow the user to guess up to 4 times, what my favorite number is.
var favoriteNumber = Math.floor((Math.random() * 10 + 1)); //Assigned my favorite number to a variable so that it could be easily changed later.  Source: https://www.w3schools.com/jsref/jsref_random.asp
for (var attempt = 0; attempt < 4; attempt++) {
  var usersGuess = prompt('Can you guess my favorite number? (HINT: It\'s somewhere between 1-10)');

  if (usersGuess < favoriteNumber) {
    alert('Nice try, but you are too LOW!');
  } else if (usersGuess > favoriteNumber) {
    alert('Nice try, but you are too HIGH!');
  } else {
    alert('Awesome, you guessed right! My favorite number is ' + favoriteNumber);
    correctAnswers++;
    break; //Break the loop early since the user guessed right.
  }
}

//Query to the user: Can you guess one of the 4 states I have previously lived?
var formerResidencyStates = ['washington', 'california', 'virginia', 'south carolina'];
var residencyattempts = 0;

loop1: //source: https://stackoverflow.com/questions/183161/whats-the-best-way-to-break-from-nested-loops-in-javascript
while (residencyattempts < 6) {
  residencyattempts++;
  var usersResidencyGuess = prompt('Can you guess one of the 4 states that I have previously lived in?').toLowerCase(); //This will take the users answer and convert it into all lowercase.
  for (var i = 0; i < formerResidencyStates.length; i++) {
    if (usersResidencyGuess === formerResidencyStates[i]) { //TODO: add state initials
      alert('Congrats! I have lived in ' + usersResidencyGuess + '! In total, I have lived in ' + formerResidencyStates);
      correctAnswers++;
      break loop1;
    }
  }
  alert('Sorry, try again!');
}
if (residencyattempts > 5) {
  alert('Oh no! Looks like you didn\'t get it.  I have lived in Washington, California, Virginia, and South Carolina.'); //This is the message that will display if the user fails all 6 attempts.
}

//This final alert will notificy the user how many questions they answered correctly.
alert('Thanks for taking my quiz ' + username + ' you got ' + correctAnswers + ' out of ' + totalQuestions + ' questions correct.');
