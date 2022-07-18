// const hello = 'hello world'
// const regex = /hello \w+/g
// const match = hello.match(regex)
// console.log(match)

// const Developer = (name: string) => {
//   this.name = name;
// }

class Developer {
  name: string;
  type: string;
  constructor(name: string) {
    this.name = name;
    this.type = 'developer';
  }
}

class Tester {
  name: string;
  type: string;
  constructor(name: string) {
    this.name = name;
    this.type = 'tester';
  }
}

class EmployeeFactory {
  create(name: string, type: number): Developer | Tester {
    return type === 1 ? new Developer(name) : new Tester(name);
  }
}

const sayHello = (employee: Developer | Tester) => {
  console.log(`Hello my name is ${employee.name} and I am a ${employee.type}`);
}

const employeeFactory = new EmployeeFactory()
// console.log(employeeFactory.create('Juan', 1));
const employees: Array<Developer | Tester> = []
const Patrick = employeeFactory.create('Patrick', 1)
const Juan = employeeFactory.create('Juan', 1)
const Maria = employeeFactory.create('Maria', 2)
// console.log(Patrick, Juan, Maria)

employees.push(Patrick, Juan, Maria)
employees.forEach(sayHello)