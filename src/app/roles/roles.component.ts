import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  toDos: any;
  url: string="https://api.mocki.io/v1/13f44462";
 constructor(private service: CommonService  ) { 

 }
 ngOnInit() {
   this.service.getAll(this.url).subscribe(  
     (value)=>{this.toDos=value}
     );
 }
}
