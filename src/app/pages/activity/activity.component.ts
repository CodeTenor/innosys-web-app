import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Activity } from 'src/app/_models/activity';
import { ActivityAdaptor } from 'src/app/_models/activity-adaptor';
import { InnosysApiService } from 'src/app/_services/innosys-api.service';
import {
  saveAs as importedSaveAs
} from "file-saver";

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
      this.fileForm = this.formbuilder.group({
        profile: ['']
      });
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
    this.innosysApiService.exportActivityScript().subscribe(
      result => {
         const newBlob = new Blob([(result)], { type: 'application/sql' });
        importedSaveAs(newBlob, "script.sql");
      }
    );
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileForm.get('profile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('filename', this.fileForm.get('profile').value);
    if (this.fileForm.get('profile').value !== '') {
      this.innosysApiService.importActivityByCsv(formData).subscribe(
        (res) => window.location.reload(),
        (err) => console.log(err)
      );
    }
  }
}
