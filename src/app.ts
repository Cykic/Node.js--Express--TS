let employee: [number, string];

employee = [1, `24`];
console.log(employee);

type Foundation = {
  id: number | string;
  name: string;
};

const foundation: Foundation = {
  id: "sas",
  name: "Sam-Olayemi",
};

console.log(foundation);

// Interfaces are for object and ! primitives( they wont work with unions)
interface UserInterface {
  readonly id: number | string;
  name: string;
  age?: number; //Optional property
}

const user = <UserInterface>{
  id: "sas",
  name: "Sam-Olayemi",
};

// user.id = 1;

// console.log(user);

class Engineer {
  private id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    console.log(this);
  }
}

const bolaji = new Engineer(2, "Sam");

console.log(bolaji);

function getArray<T>(items: T[]): T[] {
  return Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5]);
let strArray = getArray<string>(["1,2,3,4", "Jill"]);
