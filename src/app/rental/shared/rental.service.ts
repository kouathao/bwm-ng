import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rental } from "./rental.modal";
import { HttpClient } from "@angular/common/http";

// export so it can be use elsewhere
@Injectable()
export class RentalService {
  constructor(private http: HttpClient) {}

  // Display rental data from service and show in their own page
  public getRentalById(rentalId: string): Observable<any> {
    return this.http.get("/api/v1/rentals/" + rentalId);
  }

  public getRentals(): Observable<any> {
    // code here
    return this.http.get("/api/v1/rentals");
  }
}
