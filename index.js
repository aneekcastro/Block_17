// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    return this.data.length;
  }
  printNumbers() {
    this.data.forEach(num => console.log(num));
    return this.printNumbers;
  }
  odds() {
    let odds = [];
    for (let i =0; i < this.data.length; i++) {
      if (this.data[i] % 2 === 1) {
        odds.push(this.data[i]);
      }
    }
    return odds;
  }
  evens() {
    let evens = [];
    for (let i =0; i < this.data.length; i++) {
      if (this.data[i] % 2 === 1) {
        evens.push(this.data[i]);
      }
    }
    return evens;
  }
  sum() {
    let sum = [];
    for (let i =0; i < this.data.length; i++) {
      if (this.data[i] % 2 === 1) {
        sum.push(this.data[i]);
      }
    }
    return sum;
  }
  product() {
    let product = [];
    for (let i =0; i < this.data.length; i++) {
      if (this.data[i] % 2 === 1) {
        product=product * (this.data[i]);
      }
    }
    return product;
  }
  greaterThan(target) {
    let greaterThan = [];
    for (let i =0; i < this.data.length; i++) {
      if (this.data[i] % 2 === 1) {
        greaterNumbers.push(this.data[i]);
      }
    }
    return greaterNumbers;
  }
  howMany(target) {
    let count = [];
    for (let i =0; i < this.data.length; i++) {
      if (this.data[i] === target) {
        count++;
      }
    }
    return count; 
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
