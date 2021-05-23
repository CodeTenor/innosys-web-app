import { Injectable } from '@angular/core';
import { Adaptor } from './adaptor';
import { Activity } from './activity';
import { TaskAdaptor } from './task-adaptor';

@Injectable()
export class ActivityAdaptor implements Adaptor<Activity> {

  constructor(private taskAdaptor: TaskAdaptor) { }

  adapt(item: any): Activity {
    return new Activity(item.id,
                        item.activityId,
                        item.description,
                        item.client,
                        item.startDate,
                        item.dueDate,
                        item.duration,
                        item.tasks.map(x => this.taskAdaptor.adapt(x)),
                        item.createdDate,
                        item.modifiedDate
                        );
  }
}
