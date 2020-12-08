'use strict';

console.log('helllo world');



// //create global variable th for hours
// var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1Pm', '2Pm', '3Pm', '4PM', '5PM', '6Pm', '7PM'];

// //create min/max variable for each listed place Seattle ect..


var seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  salesPerhour: [],
  dayTotal: 0,
//   //now figure out how to get random number based on these numbers and previously established variable.

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
},
