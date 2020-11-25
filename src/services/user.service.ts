import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
// import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: any;
  constructor(private http: HttpClient){
    this.apiUrl = environment.apiUrl;
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }




  getAllUsers() {
    // return this.http.get(this.apiUrl + 'allUsers/')
    // .pipe(map((response: any) => {
    //   return response.json();
    // }));

    // return this.http
    // .get(this.apiUrl+'/allusers')
    // .pipe(map(data => {}));

    return this.http.get(this.apiUrl+'/getallusers');
  }

//   get(url: string, options: {
//     headers?: HttpHeaders;
//     observe: 'response';
//     params?: HttpParams;
//     reportProgress?: boolean;
//     responseType?: 'json';
//     withCredentials?: boolean;
//  }): Observable<HttpResponse<Object>>;
  



    

}
