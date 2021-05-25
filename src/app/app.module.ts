import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InnosysApiService } from './_services/innosys-api.service';
import { TaskAdaptor } from './_models/task-adaptor';
import { ActivityAdaptor } from './_models/activity-adaptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuBarComponent } from './layout/side-menu-bar.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuBarComponent,
    ActivityComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    InnosysApiService,
    TaskAdaptor,
    ActivityAdaptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
