import Users, {User} from './Users';

export interface Student extends User {
  year: number;
  specialty: string;
}

class Students extends Users<Student> {
  add(student: Student): void {
    this.userList.push(student);
  }
}

export default Students;
