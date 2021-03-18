import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   userData: any;
   url: string="https://jsonplaceholder.typicode.com/users";
  constructor(private service: CommonService  ) { 

  }
  ngOnInit() {
    this.service.getAll(this.url).subscribe(  
      (value)=>{this.userData=value}
      );
  }

}
