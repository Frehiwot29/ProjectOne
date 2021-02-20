/**
 *• Create a car object with following properties and methods:
•  Properties: make, model, year, odometer,serviceCount
•  Methods:
• service() which increments the serviceCount value by one every time this method is
   called.
• getOdometerReading(), this method simply returns the current value of the
  odometer property.
• reset(), this method resets the value of odometer and serviceCount both to 0. 
 * 
 * 
*/
let car = {
    make: "Rava4",
    model: "Toyota",
    year: "2019",
    odometer: 10000,
    serviceCount: 30,
    service: function () {
        return this.serviceCount;
    },
    getOdometerReading: function () {
        return this.odometer;

    },
    reset: function () {
        let x = (this.odometer = 0);
        let y = (this.serviceCount = 0);
        return x + " " + y;

    },


};
console.log(car.odometer);
console.log(car.service());
console.log(car.reset());
console.log(car.odometer);
console.log(car.getOdometerReading());
console.log(car.model);
console.log(car.make);
console.log(car.service());
console.log(car.serviceCount);
console.log(car);