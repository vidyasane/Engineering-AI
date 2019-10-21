import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { switchMap } from 'rxjs/operators';
import { Subscription, timer } from 'rxjs';

import { TabledataserviceService } from './tabledataservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  set;
  data;
  th;
  subscrition: Subscription;
  statusText: string;
  constructor(private ht: HttpClient, private a: TabledataserviceService) {

  }
  ngOnInit() {
    this.subscrition = timer(0, 10000).pipe(
      switchMap(() => this.a.getInfo())
    ).subscribe(resp => {
      console.log(resp)
      this.set = resp
      this.data = this.set.hits
    });
    ;
  }
  button(id) {
    console.log(id)
    this.th = id;
  }


}