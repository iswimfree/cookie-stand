'use strict';

console.log('helllo world');
var seattleList = document.getElementById('seattle');
var tokyoList = document.getElementById('tokyo');
var dubaiList = document.getElementById('dubai');
var parisList = document.getElementById('paris');
var limaList = document.getElementById('paris');
// //create global variable th for hours
var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1Pm', '2Pm', '3Pm', '4PM', '5PM', '6Pm', '7PM'];

// //create min/max variable for each listed place Seattle ect..


var seattleStore = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  salesPerhour: [],
  dayTotal: 0,
  getRandomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  },
  hourlySales: function () {
    for (var i = 0; i < hours.length; i++) {
      var customersPerHour = this.getRandomCustomer();
      var hourlyTotal = Math.ceil(customersPerHour * this.avg);
      this.salesPerhour[i] = hourlyTotal;
      this.dayTotal += hourlyTotal;
    }
  },
  render: function () {
    this.hourlySales();
    for (var i = 0; i < hours.length; i++) {
      var washingtonlist = document.createElement('li');
      washingtonlist.textContent = `${hours[i]}: ${this.salesPerhour[i]} cookies `;
      seattleList.appendChild(washingtonlist);
    }
    washingtonlist = document.createElement('li');
    washingtonlist.textContent = `Total: ${this.dayTotal} cookies`;
    seattleList.appendChild(washingtonlist);
  }
};
var tokyoStore = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  salesPerhour: [],
  dayTotal: 0,
  getRandomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  },
  hourlySales: function () {
    for (var i = 0; i < hours.length; i++) {
      var customersPerHour = this.getRandomCustomer();
      var hourlyTotal = Math.ceil(customersPerHour * this.avg);
      this.salesPerhour[i] = hourlyTotal;
      this.dayTotal += hourlyTotal;
    }
  },
  render: function () {
    this.hourlySales();
    for (var i = 0; i < hours.length; i++) {
      var japanlist = document.createElement('li');
      japanlist.textContent = `${hours[i]}: ${this.salesPerhour[i]} cookies `;
      tokyoList.appendChild(japanlist);
    }
    japanlist = document.createElement('li');
    japanlist.textContent = `Total: ${this.dayTotal} cookies`;
    tokyoList.appendChild(japanlist);
  }
};

var dubaiStore = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  salesPerhour: [],
  dayTotal: 0,
  getRandomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  },
  hourlySales: function () {
    for (var i = 0; i < hours.length; i++) {
      var customersPerHour = this.getRandomCustomer();
      var hourlyTotal = Math.ceil(customersPerHour * this.avg);
      this.salesPerhour[i] = hourlyTotal;
      this.dayTotal += hourlyTotal;
    }
  },
  render: function () {
    this.hourlySales();
    for (var i = 0; i < hours.length; i++) {
      var uaelist = document.createElement('li');
      uaelist.textContent = `${hours[i]}: ${this.salesPerhour[i]} cookies `;
      seattleList.appendChild(uaelist);
    }
    uaelist = document.createElement('li');
    uaelist.textContent = `Total: ${this.dayTotal} cookies`;
    dubaiList.appendChild(uaelist);
  }
};
var parisStore = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  salesPerhour: [],
  dayTotal: 0,
  getRandomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  },
  hourlySales: function () {
    for (var i = 0; i < hours.length; i++) {
      var customersPerHour = this.getRandomCustomer();
      var hourlyTotal = Math.ceil(customersPerHour * this.avg);
      this.salesPerhour[i] = hourlyTotal;
      this.dayTotal += hourlyTotal;
    }
  },
  render: function () {
    this.hourlySales();
    for (var i = 0; i < hours.length; i++) {
      var francelist = document.createElement('li');
      francelist.textContent = `${hours[i]}: ${this.salesPerhour[i]} cookies `;
      parisList.appendChild(francelist);
    }
    francelist = document.createElement('li');
    francelist.textContent = `Total: ${this.dayTotal} cookies`;
    parisList.appendChild(francelist);
  }
};
var limaStore = {
  name: 'Lima',
  min: 2,
  max: 14,
  avg: 4.6,
  salesPerhour: [],
  dayTotal: 0,
  getRandomCustomer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);

  },
  hourlySales: function () {
    for (var i = 0; i < hours.length; i++) {
      var customersPerHour = this.getRandomCustomer();
      var hourlyTotal = Math.ceil(customersPerHour * this.avg);
      this.salesPerhour[i] = hourlyTotal;
      this.dayTotal += hourlyTotal;
    }
  },
  render: function () {
    this.hourlySales();
    for (var i = 0; i < hours.length; i++) {
      var perulist = document.createElement('li');
      perulist.textContent = `${hours[i]}: ${this.salesPerhour[i]} cookies `;
      limaList.appendChild(perulist);
    }
    perulist = document.createElement('li');
    perulist.textContent = `Total: ${this.dayTotal} cookies`;
    limaList.appendChild(perulist);
  }
};

seattleStore.render();

tokyoStore.render();

dubaiStore.render();

parisStore.render();

limaStore.render();
