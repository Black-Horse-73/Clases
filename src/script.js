class Car {
   constructor(brand, model, color) {
      this.brand = brand;
      this.model = model;
      this.color = color;
      // console.log('objCar');
   }
   printInfo() {
      console.log(car.brand, car.model, car.color)
   }
   changeColor(newColor) {
      this.color = newColor;
   };

   let car1 = new Car('Audi', 'A8', 'black').changeColor('red').printInfo();
   let car2 = new Car('BMW', 'X6', 'black').changeColor('yellow').printInfo();
   let car3 = new Car('Ford', 'Mustang', 'white').changeColor('black').printInfo();

   console.log(car1);
   console.log(car2);
   console.log(car3);



   // let color = new Car('gray');

   // printInfo();

   console.log(car.brand, car.model, car.color);