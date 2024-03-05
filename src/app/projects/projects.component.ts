import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  filteredProjects = [
    {
      image:'../assets/service/logo1234.jpeg.jpg',
      name:'Phase-3 Hayatabad',
      location:'10 KW Grid Tied  Solar System Installed In Hayatabad Phase 3 , Peshawar KPK',
      discription:'LONGI HIMO5 555 5Kw Solar Panel,  10Kw Sunways Inverter For more details please contact below',
    },
    {
      image:'',
      name:'',
      location:'10 KW Grid Tied  Solar System Installed In Hayatabad Phase 3 , Peshawar KPK',
      discription:''
    },
    {
      
    }
  ];
}
export interface project{
  image: string;
  name:string;
  location:String;
  discription:string;
}
