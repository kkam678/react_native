import 'reflect-metadata';
import {Container} from "typedi";
import {LoginViewModel} from "../application/view-model/login.view-model";
import LoginStore from "../interface/store/login.store";
import LoginRepository from "../framework/repository/login.repository";
export default() => {
    Container.set("LoginStore", new LoginStore());
    Container.set("ILoginRepository", new LoginRepository());
    Container.set("ILoginViewModel", new LoginViewModel(Container.get('LoginStore'), Container.get('ILoginRepository')));

};