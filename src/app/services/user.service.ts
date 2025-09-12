import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, shareReplay } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private data$!: Observable<any>;
  firstName = new BehaviorSubject<string>("Smit");
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

  updateName(newName: string) {
    this.firstName.next(newName);
  }

  getData(): Observable<any> {
    if (!this.data$) {
      this.data$ = this.http
        .get(
          "https://dummyjson.com/products?limit=10&skip=10&select=title,price"
        )
        .pipe(
          shareReplay(1) // ✅ cache the latest value for all subscribers
        );
    }
    return this.data$;
  }
}
