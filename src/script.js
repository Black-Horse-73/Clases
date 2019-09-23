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
   set changeColor(newColor) {
      this.color = newColor;
   };

   let car1 = new Car('Audi').printInfo();
   let car2 = new Car('BMW').printInfo();
   let car3 = new Car('Ford').printInfo();



   // let color = new Car('gray');

   // printInfo();

   console.log(car.brand, car.model, car.color);