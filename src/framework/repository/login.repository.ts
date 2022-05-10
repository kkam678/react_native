import {ILoginRepository} from "../../domain/repository/ilogin.repository";
import LoginEntity from "../../domain/entity/login.entity";
import LoginStore from "../../interface/store/login.store";
import LoginDto from "../../interface/dto/login.dto";

export default class LoginRepository implements ILoginRepository {
    constructor() {

    }

    async requestAuthToken(dto: LoginDto): Promise<LoginEntity> {
        const account = dto.getAccount()
        const password = dto.getPassword()
        const result = new LoginEntity('token');
        return result;
    }
}