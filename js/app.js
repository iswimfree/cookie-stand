'use strict';


//Github partner powerhours in frontrow
'use strict';

var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1Pm', '2Pm', '3Pm', '4PM', '5PM', '6Pm', '7PM'];


// // //create min/max variable for each listed place Seattle ect..
var seattleList = document.getElementById('seattle');

var seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  hourlySalesArray: [],
  dailyTotal: 0,
  getRandomNumber: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  }

}