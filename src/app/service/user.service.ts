import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL: string = 'http://localhost:3000';

  httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient : HttpClient) { }

  // Get All Details
  getAllUsers(this:any) : Observable<User[]> {
    return this.httpClient.get(this.apiURL +'/users', this.httpOptions).pipe(catchError((error : HttpErrorResponse)=>{
        console.log(error);
        return throwError(error);
    }));
  }

  // Create User
  createUser(this:any,user:User) : Observable<User>{
    return this.httpClient.post(this.apiURL + '/users', JSON.stringify(user), this.httpOptions).pipe(catchError((error : HttpErrorResponse)=>{
      console.log(error);
      return throwError(error);
    }));
  }

  // Find Single User
  findUser(this:any,id:number) : Observable<User>{
    return this.httpClient.get(this.apiURL + '/users/' + id, this.httpOptions).pipe(catchError((error : HttpErrorResponse)=>{
      console.log(error);
      return throwError(error);
    }));
  }

  // Update User
  updateUser(this:any,id:number,user:User) : Observable<User>{
    return this.httpClient.put(this.apiURL + '/users/' + id, JSON.stringify(user), this.httpOptions).pipe(catchError((error : HttpErrorResponse)=>{
      console.log(error);
      return throwError(error);
    }));
  }

  // Delete User
  deleteUser(this:any,id:number) : Observable<User>{
    return this.httpClient.delete(this.apiURL + '/users/' + id, this.httpOptions).pipe(catchError((error : HttpErrorResponse)=>{
      console.log(error);
      return throwError(error);
    }));
  }
}
