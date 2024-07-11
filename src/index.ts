type User = {
  name: string;
  age: number;
  group: string;
};

type Admin = {
  name: string;
  age: number;
  role: string;
};

type Person = User | Admin;

const persons: Person[] = [
  {
    name: 'Admin admin',
    age: 404,
    role: 'admin',
  },
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Ильяс Башаров',
    age: 44,
    group: 'Строитель',
  },
  {
    name: 'Игнат Дудка',
    age: 33,
    group: 'Друг',
  },
  {
    name: 'Клавдия Коршунова',
    age: 59,
    group: 'Учитель',
  },
];

const logPerson = (user: Person) => {
  console.log(`${user.name}, ${user.age}`);
};

console.log('Users:');
persons.forEach(logPerson);
