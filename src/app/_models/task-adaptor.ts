import { Injectable } from '@angular/core';
import { Adaptor } from './adaptor';
import { Task } from './task';

@Injectable()
export class TaskAdaptor implements Adaptor<Task> {

  adapt(item: any): Task {
    return new Task(item.id,
                    item.description,
                    item.status,
                    item.completedDate == undefined ? undefined : item.completedDate
                    );
  }
}
