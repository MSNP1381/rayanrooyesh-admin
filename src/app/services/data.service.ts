import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Message {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [{ name: 'رنکینگ' }, { name: 'لیست تراکنش های کلی' }, { name: 'لیست تراکنش ها به تفکیک تیم' }]
  public baseUrl='http://127.0.0.1:8000/'
  constructor(private http:HttpClient) { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
  public getRanking():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type" :  'application/json',
        "Authorization" : 'Basic ' + btoa('msnp1:123456amn')
      })
    };
  
    return this.http.get(this.baseUrl+'rank',httpOptions);
  }
}
