import {Job} from './Job';
import {Person} from './Person';

const programmer = new Job('Программист', 200000);
const mechanic = new Job('Механик', 40000);

const egor = new Person('Егор');
egor.setJob(programmer);
egor.work();

const denis = new Person('Денис');
denis.setJob(mechanic);
denis.work();

denis.setJob(programmer);
denis.work();
