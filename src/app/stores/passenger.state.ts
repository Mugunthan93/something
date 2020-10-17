import { Action, Selector, State, StateContext } from '@ngxs/store';
import { FlightPassengerState } from './passenger/flight.passenger.states';
import { HotelPassengerState } from './passenger/hotel.passenger.state';
import { BusPassengerState } from './passenger/bus.passenger.state';
import { TrainPassengerState } from './passenger/train.passenger.state';

export interface pass {
    check : boolean
}

export class CheckPassenger {
    static readonly type = '[passenger] CheckPassenger';
}

@State<pass>({
    name: 'passenger',
    defaults: {
        check : false
    },
    children: [
        FlightPassengerState,
        HotelPassengerState,
        BusPassengerState,
        TrainPassengerState
    ]
})
export class PassengerState {

    constructor() {
        
    }

    @Selector()
    static getCheckPassenger(state : pass) {
        return state.check;
    }

    @Action(CheckPassenger)
    checkpass(states : StateContext<pass>) {
        states.patchState({
            check : true
        });
    }

}