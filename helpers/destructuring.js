const deadpool = {
  name: "Wade",
  lastname: "Winston",
  power: "Regeneration",
  age: 50,
  getName() {
    this.name + " " + this.lastname;
  },
};

//bad use
// const name = deadpool.name;
// const lastname = deadpool.lastname;
// const power = deadpool.power;

//shorter
const { name, lastname, power, age = 0 } = deadpool;

// printHero(hero) {
//     const { name, lastname, power, age = 0 } = hero;
//     console.log(name, lastname, power);
// }

printHero = ({ name, lastname, power, age = 0 }) => {
  console.log(name, lastname, power);
};

printHero(deadpool);

const heroes = ["Deadpool", "Superman", "Batman"];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

//const [h1, h2, h3] = heroes;

//console.log(h1, h2, h3);

const [, , h3] = heroes;
console.log(h3);
