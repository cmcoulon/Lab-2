'use strict';

//Ask for the user's name
var username = prompt('Welcome to my site! What is your name?');
alert('Welcome to my site ' + username + '! To get us started, we are going to take a little quiz all about me.');
//document.getElementsById("titleLogo").innerHTML = username;

//Am I married?
var maritalStatus = prompt('Am I married? (\'yes\' or \'no\')').toLowerCase();

if (maritalStatus === 'yes' || maritalStatus === 'y') {
  alert('That is correct, I have been married for 11 years!');
}
else if (maritalStatus === 'no' || maritalStatus === 'n') {
  alert('I am in fact married');
} else {
  alert('You didn\'t even try!');
}
console.log('User\'s answer to my marital status: ' + maritalStatus);


//Am I from the Northwest?
var originLocation = prompt('Am I from the Northwest? (\'yes\' or \'no\')').toLowerCase();

if (originLocation === 'yes' || originLocation === 'y') {
  alert('That is correct! I am from the Northwest');
} else if (originLocation === 'no' || originLocation === 'n') {
  alert('Better luck next time!');
} else {
  alert('You didn\'t even try!');
}
console.log('User\'s response to origin location: ' + originLocation);

//Did I go to college?
var collegeAttendance = prompt('Did I attend college? (\'yes\' or \'no\')').toLowerCase();

if (collegeAttendance === 'yes' || collegeAttendance === 'y') {
  alert('You are correct, I attended Franklin University Switzerland');
} else if (collegeAttendance === 'no' || collegeAttendance === 'n') {
  alert('Better luck next time!');
} else {
  alert('You didn\'t even try!');
}
console.log('User\'s entry for college attendance: ' + collegeAttendance);

//Have I lived abroad?
var residence = prompt('Have I lived abroad? (\'yes\' or \'no\')').toLowerCase();

if (residence === 'yes' || residence === 'y') {
  alert('Yes that is correct! I have lived in ');
} else if (residence === 'no' || residence === 'n') {
  alert('Nice try, but no cigar!');
} else {
  alert('You didn\'t even try!');
}
console.log('User\'s response to residence location: ' + residence);

//Do I have any children?
var numberOfChildren = prompt('Do I have any children? (\'yes\' or \'no\')').toLowerCase();

if (numberOfChildren === 'yes' || numberOfChildren === 'y') {
  alert('Nice! I do have two children: Reagan and Valerie');
} else if (numberOfChildren === 'no' || numberOfChildren === 'n') {
  alert('Better luck next time!');
} else {
  alert('You didn\'t even try!');
}
console.log('User\'s response to number of children: ' + numberOfChildren);


