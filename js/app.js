'use strict';

console.log('helllo world');

var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
var storeLocation = [];
var totalofTotals = 0;
var cookieTable = document.getElementById('cookie table');


function Salmoncookie(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlySales = [];
  this.dailySales = 0;
  storeLocation.push(this);

}
////going to do the hourly sales here...
Salmoncookie.prototype.getRandomNumber = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};
//lets do some mathy stuff
Salmoncookie.prototype.moneyPerHour = function () {
  for (var i = 0; i < hours.length; i++) {
    var totalSales = Math.ceil(this.getRandomNumber() * this.avg);
    this.hourlySales[i] = totalSales;
    this.dailySales += totalSales;
  }
};
//anything but i can do it !! just believe!
Salmoncookie.prototype.renderTable = function () {
  this.moneyPerHour();
  var trElement = document.createElement('tr');//create tr
  cookieTable.appendChild(trElement); //add to table
  var thElement = document.createElement('th'); //create th
  thElement.textContent = this.name; //this creates the name
  trElement.appendChild(thElement); // this adds name to table
  for (var i = 0; i < this.hourlySales.length; i++) {
    var tdElement = document.createElement('td'); //creating more elements
    tdElement.textContent = this.hourlySales[i];
    trElement.appendChild(tdElement); //adding more to table
  }
  tdElement = document.createElement('td'); //this is for daily sales
  tdElement.textContent = this.dailySales;
  trElement.appendChild(tdElement);//adding to table
};
//create table head maybe this should be moved up honestly.
function renderHeader() {
  var tHead = document.createElement('thead');
  cookieTable.appendChild(tHead);
  var trElement = document.createElement('tr');
  tHead.appendChild(trElement);
  var tdElement = document.createElement('td');
  trElement.appendChild(tdElement);
  for (var i = 0; i < hours.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = ('Daily Total');
  trElement.appendChild(thElement);
}

function renderBody() {
  var tbodyElement = document.createElement('tbody');
  cookieTable.appendChild(tbodyElement);
}

function renderFoot() {
  var tfElement = document.createElement('tfoot');
  cookieTable.appendChild(tfElement);

  var trElement = document.createElement('tr');
  tfElement.appendChild(trElement);

  var thElement = document.createElement('th');
  thElement.textContent = 'Hourly Sales';
  trElement.appendChild(thElement);

  for (var i = 0; i < hours.length; i++) {
    // console.log(storeLocation[i]);
    var allSales = i;
    for (var j = 0; j < storeLocation.length; j++) {
      totalofTotals += storeLocation[j].hourlySales[i];
      allSales += storeLocation[j].hourlySales[i];
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = totalofTotals;
    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = allSales;
  trElement.appendChild(tdElement);
}

new Salmoncookie('Seattle', 23, 65, 6.3);
new Salmoncookie('Tokyo', 3, 24, 1.2);
new Salmoncookie('Dubai', 11, 38, 3.7);
new Salmoncookie('Paris', 20, 38, 2.3);
new Salmoncookie('Lima', 2, 16, 4.6);

function renderAll() {
  for (var i = 0; i < storeLocation.length; i++) {
    // storeLocation[i].render();
    storeLocation[i].renderTable();

  }
}
renderBody();
renderFoot();
renderHeader();
renderAll();

