import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from './pages/activity/activity.component';

const routes: Routes = [
  { path: '', component: ActivityComponent },
  { path: '**', component: ActivityComponent },
  // { path: '',   redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
