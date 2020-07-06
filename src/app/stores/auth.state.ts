import { State, Action, StateContext, Store } from '@ngxs/store';
import { AuthService } from '../services/auth/auth.service';
import { Navigate } from '@ngxs/router-plugin';
import { LoadingController, AlertController, MenuController } from '@ionic/angular';
import { GetUser, UserState } from './user.state';
import { GetCompany, CompanyState } from './company.state';
import { user } from '../models/user';
import { StateReset } from 'ngxs-reset-plugin';
import { DashboardState, UpcomingTrips } from './dashboard.state';
import { SearchState } from './search.state';
import { ResultState } from './result.state';
import { BookState } from './book.state';
import { FlightSearchState } from './search/flight.state';
import { FlightResultState } from './result/flight.state';
import { FLightBookState } from './book/flight.state';
import { OneWaySearchState } from './search/flight/oneway.state';
import { RoundTripSearchState } from './search/flight/round-trip.state';
import { MultiCitySearchState } from './search/flight/multi-city.state';
import { OneWayResultState } from './result/flight/oneway.state';
import { DomesticResultState } from './result/flight/domestic.state';
import { InternationalResultState } from './result/flight/international.state';
import { MultiCityResultState } from './result/flight/multi-city.state';
import { OneWayBookState } from './book/flight/oneway.state';
import { DomesticBookState } from './book/flight/domestic.state';
import { InternationalBookState } from './book/flight/international.state';
import { MultiCityBookState } from './book/flight/multi-city.state';
import { BookingState } from './booking.state';
import { ApprovalState } from './approval.state';
import { FilterState } from './result/filter.state';
import { SharedState } from './shared.state';

export class Login {
    static readonly type = '[App] LoginUser';
    constructor(public username: string,public password: string) {
    }
}

export class Logout {
    static readonly type = '[App] LogOutUser';
}

export class Signup{
    static readonly type = '[App] SignUpUser';
    constructor(public signupData) {
        
    }
}

@State<void>({
    name : 'Auth',
    defaults:null
})
export class AuthState {

    constructor(
        private loadingCtrl: LoadingController,
        private alertCtrl: AlertController,
        private authService: AuthService,
        public menuCtrl:MenuController,
        private store : Store
    ) {
    }

    @Action(Login)
    async Login(states: StateContext<void>, action: Login) {

        const loading = await this.loadingCtrl.create({
            spinner: "crescent"
        });
        const failedAlert = await this.alertCtrl.create({
            header: 'Signup Failed',
            buttons: [{
                text: 'Ok',
                role: 'ok',
                cssClass: 'danger',
                handler: (res) => {
                    failedAlert.dismiss({
                        data: false,
                        role: 'failed'
                    });
                }
            }]
        });

        loading.message = "Login User...";
        await loading.present();

        let data : user = null;

        try {
            const userLoginResponse = await this.authService.login(action.username, action.password);
            console.log(userLoginResponse);
            const JSONdata = userLoginResponse.data;
            console.log(JSON.parse(JSONdata));
            sessionStorage.setItem('session', JSONdata);
            const userResponse : user = JSON.parse(userLoginResponse.data);
            data = userResponse;

            this.store.dispatch(new GetUser(data));
            this.store.dispatch(new GetCompany(data.customer_id));
            this.store.dispatch(new UpcomingTrips());
            loading.dismiss();
            this.store.dispatch(new Navigate(['/', 'home', 'dashboard', 'home-tab']));
        }
        catch (error) {
            console.log(error);
            if (error.error == "{message :'UnAuthorized User'}") {
                failedAlert.message = "UnAuthorized Users";
                this.store.dispatch(new Logout());
                loading.dismiss();
                failedAlert.present(); 
            }
        }
    }

    @Action(Logout)
    async Logout(states: StateContext<void>, action: Logout) {

        const logout = await this.authService.logout();
        sessionStorage.clear();

        this.store.dispatch(new StateReset(
            AuthState,
            UserState,
            CompanyState,
            DashboardState,
            SearchState,
            ResultState,
            BookState,

            //lvl 2
            FlightSearchState,
            FlightResultState,
            FLightBookState,

            OneWaySearchState,
            RoundTripSearchState,
            MultiCitySearchState,

            OneWayResultState,
            DomesticResultState,
            InternationalResultState,
            MultiCityResultState,

            OneWayBookState,
            DomesticBookState,
            InternationalBookState,
            MultiCityBookState,

            BookingState,
            ApprovalState,

            FilterState,
            SharedState
        ));
        this.menuCtrl.toggle('first');
        this.store.dispatch(new Navigate(['/', 'auth']));
        
    }

}


// const veerObject = {
//     PAN_number: null,
//     address: null,
//     approver: null,
//     city: null,
//     country_name: null,
//     createdAt: "2018-11-09T08:03:23.357Z",
//     created_by: null,
//     credit_limit: 10000,
//     credit_req: null,
//     customer_id: 81,
//     designation: "developer",
//     dob: null,
//     email: "veera@tripmidas.com",
//     gender: null,
//     grade: null,
//     gst_details: null,
//     id: 224,
//     is_Password_Changed: true,
//     is_rightsto_book: null,
//     lastname: null,
//     manager_email: null,
//     manager_name: null,
//     markup_charge: null,
//     name: "Veera",
//     passport_expiry: null,
//     passport_no: null,
//     password: "$2a$10$RJa5sLQTNnWCJhAyo8L.6OyErvfRTd524K87Df.M8O45cS5rw2yWC",
//     phone_number: "9655261060",
//     resetPasswordExpires: "1576672044556",
//     resetPasswordToken: "6626f0bfd726076357f6efc8bd642d48ebc07f7b",
//     role: "management",
//     sales_id: null,
//     service_charge: null,
//     staff_code: null,
//     status: true,
//     updatedAt: "2019-12-18T12:25:56.214Z",
//     validity_period: null
// }
// sessionStorage.setItem('session', JSON.stringify(veerObject));