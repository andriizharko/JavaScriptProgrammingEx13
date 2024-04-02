/**
 * Person class
 * @param {string} fName The person first name
 * @param {string} lName The person last name
 * @param {Date} dob The date of birth
 */
const Person = function (fName, lName, dob) {
  this.firstName = fName;
  this.lastName = lName;
  this.dateOfBirth = dob;

  this.toString = () => {
    return `Name: ${this.firstName} ${
      this.lastName
    } DOB: ${this.dateOfBirth.toDateString()}`;
  };

  /**
   * Calculates the age in years
   * @returns {number} the age in years based off the date of birth
   */
  this.age = function () {
    const now = new Date();
    let yearsOfAge = now.getFullYear() - this.dateOfBirth.getFullYear();

    if (
      now.getMonth() < this.dateOfBirth.getMonth() ||
      (now.getMonth() === this.dateOfBirth.getMonth() &&
        now.getDate() < this.dateOfBirth.getDate())
    ) {
      yearsOfAge -= 1;
    }

    return yearsOfAge;
  };
};

let person1 = new Person("Chris", "Cusack", new Date(2000, 2, 20));
let person2 = new Person("Justin", "Cormier", new Date(1999, 1, 1));
let person3 = new Person("Jean", "Cormier", new Date(1980, 4, 4));
let person4 = new Person("Jennifer", "Cusack", new Date(1988, 3, 3));

let people = [];

people.push(person1, person2, person3, person4);

console.log(people);

// Filter
// Always returns an array
let query = people.filter(
  (person) => person.firstName === "Jennifer" || person.lastName === "Cormier"
);

//let query2 = people.filter(function (p) { return p.firstName === 'Chris' });

//console.log(query2);

console.log("----QUERY----");
console.log(query);

if (!!query.length) {
  for (const p of query) {
    console.log(p.toString());
  }
} else {
  console.log("No results");
}

console.log("----Find----");

// Find
let find = people.find((p) => p.firstName === "Chris");

if (!!find) {
  console.log(find.toString());
} else {
  console.log("Nothing found with find");
}

// Partial search starts with
// Case insensitive
let partialSearch = people.filter(
  (p) => p.lastName.toLowerCase().indexOf("cus") === 0
);

console.log("---Starts With----");
console.log(partialSearch);

// Partial Search Anywhere
// Case insensitive
let partialSearchAnywhere = people.filter(
  (p) => p.lastName.toLowerCase().indexOf("ack") >= 0
);

console.log("---Anywhere----");
console.log(partialSearchAnywhere);

// Map
let firstNames = people.map((p) => p.firstName);

console.log("--Map first names to string array--");
console.log(firstNames);

let newObjects = people.map((p) => {
  return {
    wholeName: `${p.firstName} ${p.lastName}`,
    yearsOfAge: p.age(),
  };
});

console.log("--Mapped objects--");
console.log(newObjects);

// Sort oldest to youngest
people.sort((a, b) => a.dateOfBirth - b.dateOfBirth);

console.log("--Sort oldest to youngest--");
console.log(people);

people.sort((a, b) => b.dateOfBirth - a.dateOfBirth);

console.log("--Sort youngest to oldest--");
console.log(people);

let dates = [new Date(2000, 0, 1), new Date(1988, 4, 5), new Date()];

dates.sort((a, b) => a - b);

console.log(dates);

dates.sort((a, b) => b - a);

console.log(dates);

// Sort last name
people.sort((a, b) => a.lastName.localeCompare(b.lastName));

console.log("--Sort last name asc--");
console.log(people);

// Sorts alphabetical asc last name
people.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));

// Sorts alphabetical desc last name
people.sort((a, b) => (a.lastName < b.lastName ? 1 : -1));

console.log("--Some--");

let hasStartsWith = people.some((p) => p.firstName.indexOf("C") === 0);

console.log(hasStartsWith);

console.log("--Every--");

let every = people.every((p) => p.lastName !== "");

console.log(every);

console.log("---Includes---");

let chris = people.find((p) => p.firstName === "Chris");

let hasChrisObject = people.includes(chris);

console.log(hasChrisObject);

let person5 = new Person("Chris", "Cusack", new Date(2000, 2, 20));

let evilClone = people.includes(person5);

console.log(evilClone);
