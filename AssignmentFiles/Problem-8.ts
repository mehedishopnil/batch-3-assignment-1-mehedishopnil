{
     // Problem 8 Solution:: 

     class Car {
          brand: string;
          model: string;
          year: number;

          constructor(brand: string, model: string, year: number) {
          
               this.brand = brand;
               this.model = model;
               this.year = year;
          }

          displayInfo (){
               console.log(`Your car model is: ${this.year} ${this.model} ${this.brand}`);
          }

     }

     const myCar = new Car("Toyota", "Corolla", 2020);
     myCar.displayInfo();



}