import { Component, OnInit } from "@angular/core";
import { RentalService } from "../shared/rental.service";

@Component({
  selector: "bwm-rental-list",
  templateUrl: "./rental-list.component.html",
  styleUrls: ["./rental-list.component.scss"]
})
export class RentalListComponent implements OnInit {
  // rentals loop
  rentals: any[] = [];

  // inject service into constructor
  constructor(private rentalService: RentalService) {}

  ngOnInit() {
    const rentalObservable = this.rentalService.getRentals();

    rentalObservable.subscribe(
      rentals => {
        this.rentals = rentals;
      },
      err => {},
      () => {}
    );
  }
}
