import { HttpClient, provideHttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Subject, debounceTime, distinctUntilChanged, switchMap } from "rxjs";

@Component({
  selector: "app-debounce-search",
  imports: [ReactiveFormsModule],
  templateUrl: "./debounce-search.component.html",
  styleUrl: "./debounce-search.component.scss",
})
export class DebounceSearchComponent {
  private searchSubject = new Subject<string>();
  searchResults: any = [];
  display = "";
  searchForm = new FormGroup({
    firstName: new FormControl(""),
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.inItSearch();
    this.searchForm.controls.firstName.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((query: any) => this.mockSearchAPI(query))
      )
      .subscribe((results: any) => {
        this.searchResults = results?.users;
      });
  }

  onSearchInput(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.searchSubject.next(query);
  }

  private mockSearchAPI(query: string) {
    return this.http.get(`https://dummyjson.com/users/search?q=${query}`);
  }

  // private inItSearch() {
  //   this.searchSubject
  //     .pipe(
  //       debounceTime(100),
  //       distinctUntilChanged(),
  //       switchMap((query: any) => this.mockSearchAPI(query))
  //     )
  //     .subscribe((results: any) => {
  //       this.searchResults = results?.users;
  //     });
  // }
}
