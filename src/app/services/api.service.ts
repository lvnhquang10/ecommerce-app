import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface 

@Injectable({
    providedIn: 'root'
})
export class ApiService {


    private URL = 'http://localhost:3002';

    constructor(private http: HttpClient) {
    }

    login(user:any) {
        if () {
            return this.http.post(`${this.URL}/user/login`,user);
        } else {
            console.log("Invalid credentials");
        }
    }

    signup(userName: string, password: string) {
        this.http.post(`${this.URL}/user/signup`,
        {
            userName: "joshua",
            password: 321321
        }
        );
    }
}