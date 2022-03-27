import {ILoginViewModel} from "../../domain/use-case/ilogin.view-model.";
import {BaseViewModel} from "./base.view-model";
import LoginStore from "../../interface/store/login.store";
import {Alert} from "react-native";
import {action, makeAutoObservable, observable} from "mobx";
import LoginDto from "../../interface/dto/login.dto";
import {ILoginRepository} from "../../domain/repository/ilogin.repository";


export class LoginViewModel implements ILoginViewModel {
    private loginStore: LoginStore;
    private repository: ILoginRepository;
    constructor(loginStore: LoginStore, repository: ILoginRepository) {
        this.loginStore = loginStore;
        this.repository = repository;
    }

    setAccount(account: string) {
        this.loginStore.setAccount(account)
    }

    setPassword(password: string) {
        this.loginStore.setPassword(password)
    }

    async verifyAuthToken(): Promise<void> {

        const result = await this.repository.requestAuthToken(this.loginStore)

        await Alert.alert(result.accessToken);

    }

}