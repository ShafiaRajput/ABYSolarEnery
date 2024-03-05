import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'aboutUS',component:AboutUsComponent},
  {path:'services',component:CatagoryComponent},
  {path:'contactUS',component:ContactUsComponent},
  {path:'projects',component:ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
