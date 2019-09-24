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

car1.printInfo();
car2.printInfo();
car3.printInfo();