import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';




const routes: Routes = [
  { path: "", pathMatch: "full",redirectTo:  "/home"},
  {path: "home", component: HomeComponent},
  {path: "student-create", component: StudentCreateComponent},
  {path: "student-list",component: StudentListComponent},
  {path: "contact", component: ContactUsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
