import {Container} from "typedi";
import {ILoginViewModel} from "../../domain/use-case/ilogin.view-model.";
import {LoginViewModel} from "../../application/view-model/login.view-model";

export default class RootStore {    
    loginViewModel: LoginViewModel;

    constructor() {        
        this.loginViewModel = Container.get('ILoginViewModel');
    }
}