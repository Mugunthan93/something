import { State, Action, StateContext, Selector, actionMatcher } from '@ngxs/store';
import { SharedService } from '../services/shared/shared.service';
import * as _ from 'lodash';
import { from, of, iif } from 'rxjs';
import { takeWhile } from 'lodash';
import { takeUntil, skipWhile, startWith, debounceTime, distinctUntilChanged, switchMap, map, take } from 'rxjs/operators';
import { HTTPResponse } from '@ionic-native/http/ngx';

export interface Shared {
    flightCity: city[],
    hotelCity: hotelcity[],
    nationality: nationality[]
}

export interface city {
    airport_code: string
    airport_name: string
    city_code: string
    city_name: string
    country_code: string
    country_name: string
    currency: string
    nationalty: string
    cityid?: number
    countrycode? : string
}

export interface hotelcity {
    cityid: number
    country: string
    countrycode: string
    destination: string
    stateprovince: string
    stateprovincecode: string
}

export interface nationality{
    nationality: string
    country_code: string
}

export class GetFlightCity {
    static readonly type = '[Shared] GetFlightCity';
    constructor(public city : string) {
        
    }
}

export class GetHotelCity {
    static readonly type = '[Shared] GetHotelCity';
    constructor(public city: string) {

    }
}

export class GetNationality {
    static readonly type = '[hotel_search] GetNationality';
    constructor(public keyword: string) {

    }
}

@State<Shared>({
    name: 'Shared',
    defaults: {
        flightCity: [],
        hotelCity: [],
        nationality: []
    }
})
export class SharedState {
    
    constructor(
        private sharedService: SharedService
    ) {

    }

    @Selector()
    static flightcities(state: Shared) {
        return state.flightCity;
    }

    @Selector()
    static hotelcities(state: Shared) {
        return state.hotelCity;
    }

    @Selector()
    static nationalities(state: Shared) {
        return state.nationality;
    }

    @Action(GetFlightCity, {cancelUncompleted: true})
    getflightCity(states: StateContext<Shared>, action: GetFlightCity) {

        return of(action.city)
            .pipe(
                debounceTime(400),
                distinctUntilChanged(),
                switchMap(
                    (str : string) => {
                        return from(this.sharedService.searchFlightCity(str))
                    }
                ),
                map(
                    (cities: HTTPResponse) => {
                        const parsedCity: city[] = JSON.parse(cities.data);
                        states.patchState({
                            flightCity: parsedCity
                        });
                    }
                )
            )
    }

    @Action(GetHotelCity, {cancelUncompleted: true})
    gethotelCity(states: StateContext<Shared>, action: GetHotelCity) {

        return of(action.city)
            .pipe(
                debounceTime(400),
                distinctUntilChanged(),
                switchMap(
                    (str: string) => {
                        return from(this.sharedService.searchHotelCity(str))
                    }
                ),
                map(
                    (cities: HTTPResponse) => {
                        const parsedCity: hotelcity[] = JSON.parse(cities.data);
                        states.patchState({
                            hotelCity: parsedCity
                        });
                    }
                )
            )
    }

    @Action(GetNationality)
    async getNationality(states: StateContext<Shared>, action: GetNationality) {

        return of(action.keyword)
            .pipe(
                debounceTime(400),
                distinctUntilChanged(),
                switchMap(
                    (str: string) => {
                        return from(this.sharedService.getNationality(str))
                    }
                ),
                map(
                    (cities: HTTPResponse) => {
                        const nationality: nationality[] = JSON.parse(cities.data);
                        states.patchState({
                            nationality: nationality
                        });
                    }
                )
            )
    }

}