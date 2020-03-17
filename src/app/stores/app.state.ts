import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { user } from '../models/user';
import { AuthService } from '../services/auth/auth.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Navigate } from '@ngxs/router-plugin';

export interface App {
    user : any
}

export class Login {
    static readonly type = '[App] LoginUser';
    constructor(public username,public password) {
        
    }
}

export class LogOut {
    static readonly type = '[App] LogOutUser';
}

@State<App>({
    name : 'App',
})
export class AppState {

    constructor(
        public authService: AuthService,
        public store : Store
    ) {
        console.log(this.authService);
    }

    @Selector()
    static getUser(state: App) {
        return state.user;
    }

    @Selector()
    static isUserAuthenticated(state: App): boolean {
        return !!state.user.id;
    }

    @Action(Login)
    Login(states: StateContext<App>, action: Login) {
        return this.authService.login(action.username, action.password)
            .pipe(
                map(
                    (resData) => {
                        states.patchState({
                            user : resData
                        });
                        this.store.dispatch(new Navigate(['/','home']));
                    }
                )
            );
    }

    @Action(LogOut)
    Logout(states : StateContext<App>,action : LogOut){
        return this.authService.logout()
            .pipe(
                map(
                    (resData) => {
                        states.patchState({
                            user : null
                        });
                        this.store.dispatch(new Navigate(['/','auth','login']));
                    }
                )
            );
    }

}