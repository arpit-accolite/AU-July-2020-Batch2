import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdmFormComponent } from './adm-form/adm-form.component';
import { DisFormComponent } from './dis-form/dis-form.component';
import { AngularNotesComponent } from './angular-notes/angular-notes.component';

const routes: Routes = [

  { path: '', component: HomePageComponent},
  { path: 'form', component: AdmFormComponent},
  { path: 'formdisplay', component: DisFormComponent},
  { path: 'qna', component: AngularNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
