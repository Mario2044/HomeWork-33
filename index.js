class Humburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  static SIZE_SMALL = {price: 50, calories: 20};
  static SIZE_LARGE = {price: 100, calories: 40};
  static STUFFING_CHEESE = {price: 15, calories: 25};
  static STUFFING_SALAD = {price: 15, calories: 5};
  static STUFFING_POTATO = {price: 10, calories: 20};
  static TOPPING_MAYO = {price: 20, calories: 10};
  static TOPPING_SPICE = {price: 15, calories: 0};

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    let price = this.size.price + this.stuffing.price;
    this.toppings.forEach(topping => price += topping.price);
    return price;
  }

  calculateCalories() {
    let calories = this.size.calories + this.stuffing.calories;
    this.toppings.forEach(topping => calories += topping.calories);
    return calories;
  }
}

let humburger = new Humburger(Humburger.SIZE_LARGE, Humburger.STUFFING_CHEESE);
humburger.addTopping(Humburger.TOPPING_MAYO);
console.log('Calories: ' + humburger.calculateCalories());
console.log('Price: ' + humburger.calculatePrice());
humburger.addTopping(Humburger.TOPPING_SPICE)
console.log('Price with sauce:' + humburger.calculatePrice());