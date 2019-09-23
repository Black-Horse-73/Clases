'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function () {
   function Car(brand, model, color) {
      _classCallCheck(this, Car);

      this.brand = brand;
      this.model = model;
      this.color = color;
      // console.log('objCar');
   }

   _createClass(Car, [{
      key: 'printInfo',
      value: function printInfo() {
         console.log(car.brand, car.model, car.color);
      }
   }, {
      key: 'changeColor',
      value: function changeColor(newColor) {
         this.color = newColor;
      }
   }]);

   return Car;
}();

var car1 = new Car('Audi', 'A8', 'black').changeColor('red').printInfo();
var car2 = new Car('BMW', 'X6', 'black').changeColor('yellow').printInfo();
var car3 = new Car('Ford', 'Mustang', 'white').changeColor('black').printInfo();

console.log(car1);
console.log(car2);
console.log(car3);

// let color = new Car('gray');

// printInfo();

// console.log(car.brand, car.model, car.color);