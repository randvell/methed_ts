{
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

  const isAdmin = (val: Person): val is Admin => 'role' in val;

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

  const logPerson = (person: Person) => {
    let information: string;
    if (isAdmin(person)) {
      information = person.role;
    } else {
      information = person.group;
    }
    console.log(`${person.name}, ${person.age}, ${information}`);
  };

  persons.forEach(logPerson);
}
