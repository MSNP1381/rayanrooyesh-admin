import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Message {
  name: string;
  link:string;
}
export interface Transactions{
  "id": number; "actionId": number; "team_id": number; "withdrawAmount": number;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [{name: 'رنکینگ',link:'/ranking/' }, { name: 'لیست تراکنش های کلی' ,link:'/total-transactions'}, { name: 'لیست تراکنش ها به تفکیک تیم',link:'/team-transactions' }]
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


  public getTotalTransactions(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type" :  'application/json',
        "Authorization" : 'Basic ' + btoa('msnp1:123456amn')
      })
    };
 
    return this.http.get(this.baseUrl+'transactions/107',httpOptions);
  }
  public getTeamlTransactions(team_id:number): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type" :  'application/json',
        "Authorization" : 'Basic ' + btoa('msnp1:123456amn')
      })
    };
 
    return this.http.get(this.baseUrl+'transactions/'+team_id,httpOptions);
  }
}
