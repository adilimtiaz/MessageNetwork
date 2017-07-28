import 'rxjs/Rx';
import {User} from "./user.model";
import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthSevice{
    constructor(private http: Http){}

    signup(user:User){
        const body=JSON.stringify(user);
        const headers=new Headers({'Content-type' : 'application/json'});
        return this.http.post('http://localhost:3000/user',body,{headers:headers})
            .map((resp: Response)=>resp.json())
            .catch((err: Response)=>Observable.throw(err.json()));
    }

    signin(user:User){
        const body=JSON.stringify(user);
        const headers=new Headers({'Content-type' : 'application/json'});
        return this.http.post('http://localhost:3000/user/signin',body,{headers:headers})
            .map((resp: Response)=>resp.json())
            .catch((err: Response)=>Observable.throw(err.json()));
    }

    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token')!== null;
    }
}