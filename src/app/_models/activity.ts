import { Task } from './task';

export class Activity {
  constructor(
    public id: string,
    public activityId: string,
    public description: number,
    public client: string,
    public startDate: Date,
    public dueDate: Date,
    public duration: number,
    public tasks: Task[],
    public createdDate: Date,
    public modifiedDate: Date,
  ) {}
}
