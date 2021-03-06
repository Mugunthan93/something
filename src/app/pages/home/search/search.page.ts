import { Component, OnInit } from '@angular/core';
import { BookingService, booking } from 'src/app/services/booking/booking.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  booking : booking;

  constructor(
    public bookingService: BookingService
  ) {
    if (this.bookingService) {
      this.booking = this.bookingService.getBooking;
    }
    else {
      this.booking.type = 'flight';
    }
  }

  ngOnInit() {
  }

}
