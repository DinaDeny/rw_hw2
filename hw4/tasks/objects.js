const user = {
  name: "John",
  age: 34,
  address: {
    city: "NY",
    street: "Super Street",
    houseNumber: 55
  },
  hobbies: ["football", "traveling"],
  showInfo: function() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`City: ${this.address.city}`);
    console.log(`Street: ${this.address.street}`);
    console.log(`House number: ${this.address.houseNumber}`);
    console.log(`Hobbies: ${this.hobbies.join(", ")}`);
  }
};

user.showInfo();
