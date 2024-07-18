import Identifiable from './Identifiable';

export interface User extends Identifiable {
  firstname: string;
  surname: string;
  age: number;
}

abstract class Users<T extends Identifiable> {
  protected userList: T[] = [];

  add(user: T): void {
    this.userList.push(user);
  }

  remove(id: keyof T[]): boolean {
    const index = this.userList.findIndex((user) => user.id === id);

    if (index !== -1) {
      this.userList.splice(index, 1);
      return true;
    }

    return false;
  }

  get(id: keyof T[]): T | null {
    return this.userList.find((user) => user.id === id) || null;
  }

  sorted(order: 'asc' | 'desc' = 'asc'): T[] {
    return this.userList.slice().sort((a, b) => {
      if (order === 'asc') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
  }
}

export default Users;
