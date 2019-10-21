import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabledataserviceService {

  constructor(private ht:HttpClient) { }

  getInfo(){
  return  this.ht.get("https://hn.algolia.com/api/v1/search_by_date?tags=story");
  }
}

