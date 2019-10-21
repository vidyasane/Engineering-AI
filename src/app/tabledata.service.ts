import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {

  constructor(private ht:HttpClient) {
       }

       getdata(){
         return this.ht.get("http://localhost:3000/emp") .pipe(
          catchError(this.handleError)
          );

       }

       handleError(error: HttpErrorResponse){
        console.log(error);
        console.log(error.message);
        return throwError(error.message || "Invalid HTTP Request");
        }


}
