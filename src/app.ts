import { Renderable, appendRenderedToBody } from './lib'

document.body.innerHTML += "<p>Pirates!</p>"

class Person implements Renderable {
  // Constructor to initialize properties
  constructor(public name: string, public age: number) {}

  // Implementation of the render method from the Renderable interface
  render(): string {
    return `<div class="person">
              <h2>Person Details</h2>
              <p>Name: ${this.name}</p>
              <p>Age: ${this.age}</p>
            </div>`;
  }
}

enum VehicleType {
  Car = "Car",
  Truck = "Truck",
  Motorcycle = "Motorcycle",
  Bicycle = "Bicycle"
}

class Vehicle {
  constructor(
      public type: VehicleType,
      public make: string,
      public model: string,
      public year: number,
      public mileage?: number,
      public isElectric?: boolean
  ) {}

  render(): string {
    let details = `<div class="vehicle">
                     <h2>Vehicle Details</h2>
                     <p>Type: ${this.type}</p>
                     <p>Make: ${this.make}</p>
                     <p>Model: ${this.model}</p>
                     <p>Year: ${this.year}</p>`;
    if (this.mileage !== undefined) {
        details += `<p>Mileage: ${this.mileage} km</p>`;
    }
    if (this.isElectric !== undefined) {
        details += `<p>Electric: ${this.isElectric ? 'Yes' : 'No'}</p>`;
    }
    details += `</div>`;
    return details;
  }
}


let person = new Person("John Doe", 30);

const car = new Vehicle(
  VehicleType.Car,
  "Toyota",
  "Camry",
  2022,
  15000,
  false
);

const truck = new Vehicle(
  VehicleType.Truck,
  "Ford",
  "F-150",
  2020,
  45000,
  false
);

const motorcycle = new Vehicle(
  VehicleType.Motorcycle,
  "Harley-Davidson",
  "Iron 883",
  2019,
  8000,
  false
);

const bicycle = new Vehicle(
  VehicleType.Bicycle,
  "Trek",
  "Marlin 5",
  2023,
  undefined,  // Optional Mileage not provided
  true
);


console.log("Rendering each object!")
const renderableArray = [ person, car, truck, motorcycle, bicycle];
renderableArray.forEach(renderable => {
  appendRenderedToBody(renderable)
});