import { Component } from '@angular/core';
import { UsersDataService } from '../services/users-data.service'; 

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  users:any;
  constructor (private userData:UsersDataService) { 
    userData.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data
    })
  }
  
}
