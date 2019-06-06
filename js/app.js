'use strict';

// Variables
var answers = ['yes','y','no','n'];

//Ask for the user's name
var username = prompt('Welcome to my site! What is your name?');
alert('Welcome to my site ' + username + '! To get us started, we are going to take a little quiz all about me.');

var correctAnswers = 0;
var totalQuestions = 7;

var questionOne = function() {
  //Query the user: Am I married?
  var maritalStatus = prompt('Am I married? (\'yes\' or \'no\')').toLowerCase(); // '\' used in order to enable the use of the single apostrophe.  This was done to make it more clear to the user which characters are permissible.

  if (maritalStatus === answers[0] || maritalStatus === answers[1]) {
    alert('That is correct, I have been married for 11 years!');
    correctAnswers++;
  }
  else if (maritalStatus === answers[3] || maritalStatus === answers[4]) {
    alert('I am in fact married');
  } else {
    alert('You didn\'t even try!');
  }
  console.log('User\'s answer to my marital status: ' + maritalStatus);
};

var questionTwo = function() {
  //Query the user: Am I from the Northwest?
  var originLocation = prompt('Am I from the Northwest? ("yes" or "no")').toLowerCase(); //Switched to double quotation marks here just to try a different way of including quotes without having to insert '\' multiple times.

  if (originLocation === answers[0] || originLocation === answers[1]) {
    alert('That is correct! I am from the Northwest');
    correctAnswers++;
  } else if (originLocation === answers[2] || originLocation === answers[3]) {
    alert('Better luck next time!');
  } else {
    alert('You didn\'t even try!');
  }
  console.log('User\'s response to origin location: ' + originLocation);
};

var questionThree = function() {
  //Query the user: Did I go to college?
  var collegeAttendance = prompt('Did I attend college? (\'yes\' or \'no\')').toLowerCase();

  if (collegeAttendance === answers[0] || collegeAttendance === answers[1]) {
    alert('You are correct, I attended Franklin University Switzerland');
    correctAnswers++;
  } else if (collegeAttendance === answers[2] || collegeAttendance === answers[3]) {
    alert('Better luck next time!');
  } else {
    alert('You didn\'t even try!');
  }
  console.log('User\'s entry for college attendance: ' + collegeAttendance);
};

var questionFour = function() {
  //Query the user: Have I lived abroad?
  var residence = prompt('Have I lived abroad? (\'yes\' or \'no\')').toLowerCase();

  if (residence === answers[0] || residence === answers[1]) {
    alert('Yes that is correct! I have lived in ');
    correctAnswers++;
  } else if (residence === answers[2] || residence === answers[3]) {
    alert('Nice try, but no cigar!');
  } else {
    alert('You didn\'t even try!');
  }
  console.log('User\'s response to residence location: ' + residence);
};

var questionFive = function() {
  //Query the user: Do I have any children?
  var numberOfChildren = prompt('Do I have any children? (\'yes\' or \'no\')').toLowerCase();

  if (numberOfChildren === answers[0] || numberOfChildren === answers[1]) {
    alert('Nice! I do have two children: Reagan and Valerie');
    correctAnswers++;
  } else if (numberOfChildren === answers[2] || numberOfChildren === answers[3]) {
    alert('Better luck next time!');
  } else {
    alert('You didn\'t even try!');
  }
  console.log('User\'s response to number of children: ' + numberOfChildren);
};

var questionSix = function() {
  //Query to the user: What is my favorite number? This prompt will allow the user to guess up to 4 times, what my favorite number is.
  var favoriteNumber = Math.floor((Math.random() * 10 + 1)); //Assigned my favorite number to a variable so that it could be easily changed later.  Source: https://www.w3schools.com/jsref/jsref_random.asp
  for (var attempt = 0; attempt < 4; attempt++) {
    var usersGuess = parseInt(prompt('Can you guess my favorite number? (HINT: It\'s somewhere between 1-10)'));

    if (usersGuess < favoriteNumber) {
      alert('Nice try, but you are too LOW!');
    } else if (usersGuess > favoriteNumber) {
      alert('Nice try, but you are too HIGH!');
    } else if(usersGuess === favoriteNumber){
      alert('Awesome, you guessed right! My favorite number is ' + favoriteNumber);
      correctAnswers++;
      break; //Break the loop early since the user guessed right.
    } else {
      alert('You suck');
    }
  }
};

var questionSeven = function() {
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
  if (residencyattempts > 6) {
    alert('Oh no! Looks like you didn\'t get it.  I have lived in Washington, California, Virginia, and South Carolina.'); //This is the message that will display if the user fails all 6 attempts.
  }
};

// Groupd first five questions into another funtion for function practice.
var questionArray = [questionOne, questionTwo, questionThree, questionFour, questionFive];
for(var i = 0; i < 5; i++) {
  questionArray[i]();
}

//questionCaller();
questionSix();
questionSeven();

//This final alert will notificy the user how many questions they answered correctly.
alert('Thanks for taking my quiz ' + username + ' you got ' + correctAnswers + ' out of ' + totalQuestions + ' questions correct.');
