import { Component, OnInit } from '@angular/core';
import { TabledataService } from '../tabledata.service';

import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  id;
  firstname;
  lastname;
  email;
  subscription: Subscription;
  data: Object;
  errorMsg: any;

  constructor(private ser:TabledataService) { }

  ngOnInit() {
     this.ser.getdata().subscribe(resp=>this.data=resp, error=> this.errorMsg=error)
    // setTimeout(() => {
    //   window.location.reload();
    // }, 3000);

    // this.subscription = timer(0, 5000).pipe(
    //   switchMap(() => this.ser.getdata())
    // ).subscribe(resp=>this.data=resp);
   
  }


  fun(i){
    console.log(i,"i value")
    this.id=i.id;
    this.firstname=i.fi;
   this. lastname=i.la
   this.email=i.email
  }

}
