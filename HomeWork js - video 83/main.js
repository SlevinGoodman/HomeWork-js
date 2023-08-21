//task #1
const selfDescription = {
  name: "Slevin",
  age: 30,
  height: 182,
  status: "student"
};
console.log(selfDescription.name);

//task #2
const greeting = {
  sayHello(name) {
    console.log(`Hello ${name}`);
  }
};
greeting.sayHello("Tom");

//task #3
const users = [
  {
      name: 'alex',
      age: 20,
      isAdmin: true,
    },
  {
      name: 'john',
      age: 30,
      isAdmin: false,
  },
  {
      name: 'maria',
      age: 33,
      isAdmin: true,
  },
  {
      name: 'george',
      age: 23,
      isAdmin: false,
  },
  {
      name: 'pavel',
      age: 21,
      isAdmin: false,
  },
  {
  name: 'egor',
  age: 28,
  isAdmin: true,
},
]
let numUsers = 0;
for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin === false) {
    numUsers +=1
  }
}
console.log(numUsers);


