import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Activity } from 'src/app/_models/activity';
import { ActivityAdaptor } from 'src/app/_models/activity-adaptor';
import { InnosysApiService } from 'src/app/_services/innosys-api.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  fileForm: FormGroup;
  activites: Activity[];
  selectedActvitity: Activity;

  loading = true;

  constructor(private innosysApiService: InnosysApiService,
              private activityAdaptor: ActivityAdaptor,
              private formbuilder: FormBuilder) {
    this.fileForm = formbuilder.group({
      file: new FormControl(null, [Validators.required]),
    }
    );
  }

  ngOnInit(): void {
    this.innosysApiService.getAllActivites().subscribe(
      result => {
        this.activites = result.map(x => this.activityAdaptor.adapt(x));
        this.loading = false;
      }
    )
  }

  openModal(activity: Activity) {
    this.selectedActvitity = activity;
  }

  exportActivityScript() {
    window.open("https://localhost:44324/api/activity/export")
  }

  uploadActivityCsv() {

  }
}
