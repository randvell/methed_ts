import {Job} from './Job';

export class Person {
  private job: Job | null = null;

  constructor(private readonly name: string) {}

  setJob(job: Job) {
    this.job = job;
  }

  getSalary(): number {
    return this.job?.getSalary() || 0;
  }

  work(): void {
    if (!this.job) {
      throw new Error('Нельзя работать будучи нетрудоустроенным');
    }

    this.job.work(this.name);
  }
}
