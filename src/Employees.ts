import Users, {User} from './Users';

export interface Employee extends User {
  post: string;
}

class Employees extends Users<Employee> {
  add(employee: Employee): void {
    this.userList.push(employee);
  }
}

export default Employees;