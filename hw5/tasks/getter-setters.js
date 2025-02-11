const user = {
  name: "John",
  _age: 34,
  address: {
    city: "NY",
    street: "Super Street",
    houseNumber: 55
  },
  get age () {
    return this._age;
  },

  set age (value) {
    if (value < 18) {
      throw new Error('Age should be more than 18');
    } else {
      this._age = value;
    }
  },
  getUserAddress() {
    return `City: ${this.address.city}, Street: ${this.address.street}, House: ${this.address.houseNumber}`;
  }
};

console.log(user.age);
//user.age = 17;
//console.log(user.age);
user.age = 20;
console.log(user.age);

console.log(user.getUserAddress());
