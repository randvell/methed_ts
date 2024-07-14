export class Job {
  constructor(private role: string, private salary: number) {}

  work(personName: string): void {
    console.log(`«${personName} сейчас работает как ${this.role}»`);
  }

  getSalary() {
    return this.salary;
  }
}
