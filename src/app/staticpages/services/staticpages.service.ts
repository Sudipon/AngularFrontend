import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Contacts} from '../model/contact.model';
import { BehaviorSubject} from 'rxjs';
import { environment } from '../../../environments/environment';
const BackendUrl = environment.apiURL + '/contact';

@Injectable({
  providedIn: 'root'
})
export class StaticpagesService {
  public err = new BehaviorSubject<any>(null);


  constructor(private http: HttpClient, private router: Router) { }

  createContact(Data:Contacts) {
    this.http.post<{newContactMsg:any}>(BackendUrl+ '/create',Data)
    .subscribe(
      (responsedata)=>{
        this.err.next(null),this.router.navigate(['/'])
      },
    
    (err:any) => {
      this.err.next(err)
    });
  }
}
