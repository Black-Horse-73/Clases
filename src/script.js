class Car {
   constructor(brand, model, color) {
      this.brand = brand;
      this.model = model;
      this.color = color;
      // console.log('objCar');
   }
   printInfo() {
      console.log(this.brand, this.model, this.color)
   }
   changeColor(newColor) {
      this.color = newColor;
   }
}

let car1 = new Car('Audi', 'A8', 'black');
let car2 = new Car('BMW', 'X6', 'pinck');
let car3 = new Car('Ford', 'Mustang', 'white');

car1.changeColor('red');
car2.changeColor('yellow');
car3.changeColor('black');

console.log(car1.printInfo());
console.log(car2.printInfo());
console.log(car3.printInfo());



// let color = new Car('gray');

// printInfo();

// console.log(car.brand, car.model, car.color);