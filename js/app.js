'use strict';

console.log('helllo world');

var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
var storeLocation = [];

var cookieTable = document.getElementById('cookie table');
//create the construct, be the constructor.
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
  thElement.textContent = ('daily location total');
  trElement.appendChild(thElement);
}
var parentEl = document.getElementById('container');
function handleClick(event) {
  if (event.target.id === 'box-one') {
    var pEl = document.createElement('p');
    pEl.textContent = 'what kind of fish do you want';
    parentEl.append(pEl);
  }
  if (event.target.id === 'box-two') {
    var pEl = document.createElement('p');
    pEl.textContent = 'clicked:  Box 2!';
    parentEl.append(pEl);
  }
  if (event.target.id === 'box-three') {
    var pEl = document.createElement('p');
    pEl.textContent = 'Box 3 done got clicked!';
    parentEl.appendChild(pEl);
  }
  if (event.target.id === 'container') {
    var pEl = document.createElement('p');
    pEl.textContent = 'FOLLOW INSTRUCTIONS!!!';
    parentEl.appendChild(pEl);
  }
}
var myForm = document.getElementById('container-two');
function handleSubmit(event) {
  event.preventDefault();

  var cookie = event.target.cookie.value;
  console.log(cookie);

  var fish = event.target.fish.value;
  console.log(fish);

  var word = event.target.word.value;
  console.log(word);
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
renderHeader();
renderAll();
myForm.addEventListener('submit', handleSubmit, handleClick);
