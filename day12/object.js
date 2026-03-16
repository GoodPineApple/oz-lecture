console.log("객체 실습");

const person = {
  name: {
    firstName: "Gildong",
    lastName: "Hong",
  },
  age: 30,
  isAdult: true,
  printInfo: function () {
    console.log("printInfo");
  },
};
console.log(person);
console.log(person["name"]); // console.log(person[name]);
console.log(person["age"]);
console.log(person.name);
console.log(person.age);
