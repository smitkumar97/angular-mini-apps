import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get("https://dummyjson.com/users");
  }

  getTaskDetail(): Observable<any> {
    return this.http.get("https://dummyjson.com/todos");
  }

  getBlogs(): Observable<any> {
    return this.http.get("https://dummyjson.com/posts");
  }
}
