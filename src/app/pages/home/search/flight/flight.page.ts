import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit, ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { IonTabs, NavController, IonTabButton, IonTabBar } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { JourneyType, FlightSearchState } from 'src/app/stores/search/flight.state';
import { SearchType } from 'src/app/stores/search.state';
import { RouterNavigation, Navigate } from '@ngxs/router-plugin';
import { RouterStateSnapshot, RoutesRecognized, ActivatedRoute } from '@angular/router';
import { RouterTrigger } from '@ngxs/router-plugin/src/router.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.page.html',
  styleUrls: ['./flight.page.scss'],
  providers : [IonTabs]
})
export class FlightPage implements OnInit {

  journeyType$: Observable<string>;

  constructor(
    public store: Store
  ) {
    
  }
  
  ngOnInit() {
    this.journeyType$ = this.store.select(FlightSearchState.getJourneyType).pipe(map((type : number) => {
      if (type == 1) {
        return 'one-way';
      }
      else if (type == 2) {
        return 'round-trip';
      }
      else if (type == 3) {
        return 'multi-city';
      }
    }));
  }

  typeChange(evt : CustomEvent) {
    this.store.dispatch(new JourneyType(evt.detail.value));
    this.store.dispatch(new SearchType(evt.detail.value));
    this.store.dispatch(new Navigate(['/','home','search','flight',evt.detail.value]));
  }

}
