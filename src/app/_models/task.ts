export class Task {
  constructor(
    public id: string,
    public description: number,
    public status: boolean,
    public completedDate: Date
  ) {}
}
