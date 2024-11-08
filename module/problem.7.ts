{
    // Problem 7: Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
class Car {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getCarAge(): number {
      const currentYear = new Date().getFullYear(); // Get the current year
      return currentYear - this.year; // Calculate and return the car's age
    }
  }
  
  const car = new Car("Honda", "Civic", 2018);
  console.log(car.getCarAge()); 
}