import {ILoginViewModel} from "../../domain/use-case/ilogin.view-model.";
import {BaseViewModel} from "./base.view-model";
import {Alert} from "react-native";
import {action, makeAutoObservable, observable} from "mobx";
import LoginDto from "../../interface/dto/login.dto";
import {ILoginRepository} from "../../domain/repository/ilogin.repository";


export class LoginViewModel implements ILoginViewModel {
    private loginDto: LoginDto;
    private repository: ILoginRepository;
    constructor(loginDto: LoginDto, repository: ILoginRepository) {
        this.loginDto = loginDto;
        this.repository = repository;
        makeAutoObservable(this)
    }

    setAccount(account: string) {
        this.loginDto.setAccount(account)        
    }

    setPassword(password: string) {
        this.loginDto.setPassword(password)        
    }

    async verifyAuthToken(): Promise<void> {

        const result = await this.repository.requestAuthToken(this.loginDto)

        await Alert.alert(result.accessToken);

    }

}