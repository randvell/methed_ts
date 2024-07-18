import Employees from './Employees';
import Students from './Students';

// Adding 2 employees and 5 students
const employees = new Employees();
employees.add({
  id: 1,
  firstname: 'John',
  surname: 'Doe',
  age: 30,
  post: 'Manager',
});
employees.add({
  id: 2,
  firstname: 'Jane',
  surname: 'Smith',
  age: 28,
  post: 'Developer',
});

const students = new Students();
students.add({
  id: 1,
  firstname: 'Alice',
  surname: 'Brown',
  age: 20,
  year: 2,
  specialty: 'Computer Science',
});
students.add({
  id: 2,
  firstname: 'Bob',
  surname: 'White',
  age: 21,
  year: 3,
  specialty: 'Mathematics',
});
students.add({
  id: 3,
  firstname: 'Charlie',
  surname: 'Green',
  age: 22,
  year: 1,
  specialty: 'Physics',
});
students.add({
  id: 4,
  firstname: 'Daisy',
  surname: 'Black',
  age: 23,
  year: 4,
  specialty: 'Chemistry',
});
students.add({
  id: 5,
  firstname: 'Eve',
  surname: 'Yellow',
  age: 19,
  year: 2,
  specialty: 'Biology',
});

// Checking remove and get methods
console.log(employees.remove(1)); // true
console.log(employees.remove(3)); // false
console.log(employees.get(2)); // { id: 2, firstname: 'Jane', surname: 'Smith', age: 28, post: 'Developer' }
console.log(employees.get(1)); // null

console.log(students.remove(4)); // true
console.log(students.remove(6)); // false
console.log(students.get(3)); // { id: 3, firstname: 'Charlie', surname: 'Green', age: 22, year: 1, specialty: 'Physics' }
console.log(students.get(5)); // { id: 5, firstname: 'Eve', surname: 'Yellow', age: 19, year: 2, specialty: 'Biology' }

// Checking sorted method
console.log(employees.sorted()); // Sorted ascending by id
console.log(employees.sorted('desc')); // Sorted descending by id

console.log(students.sorted()); // Sorted ascending by id
console.log(students.sorted('desc')); // Sorted descending by id
