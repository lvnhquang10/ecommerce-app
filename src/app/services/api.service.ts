import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ApiService {


    private URL = 'http://localhost:3002';

    constructor(private http: HttpClient) {
    }

    login(user:any) {
        return this.http.post(`${this.URL}/user/login`,user);
    }

    isAuth():boolean {
        const token = localStorage.getItem('token');
        if(!localStorage.getItem('token')) {
            return false;
        }
        return true;
    }
}