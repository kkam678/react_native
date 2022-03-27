import {Container} from "typedi";
import {ILoginViewModel} from "../../domain/use-case/ilogin.view-model.";
import {LoginViewModel} from "../../application/view-model/login.view-model";
import LoginStore from "./login.store";

export default class RootStore {
    login: LoginStore;

    constructor() {
        this.login = Container.get('LoginStore');
    }
}