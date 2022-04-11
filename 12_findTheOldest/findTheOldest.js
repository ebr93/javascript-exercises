const findTheOldest = function(people) {
  let age = people.map(person => {
    let lastYear = person.yearOfDeath || 2022;
    return lastYear - person.yearOfBirth; 
  });

  let oldest = 0;
  for (let i = 0; i < age.length; i++) {
      if (age[i] > age[oldest]) {
        oldest = i;
      }
  }
  return people[oldest];
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
