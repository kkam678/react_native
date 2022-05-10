import LoginEntity from "../entity/login.entity";
import LoginStore from "../../interface/store/login.store";
import LoginDto from "../../interface/dto/login.dto";

export interface ILoginRepository {
    requestAuthToken(dto: LoginDto): Promise<LoginEntity>
}