import LoginEntity from "../entity/login.entity";
import LoginStore from "../../interface/store/login.store";

export interface ILoginRepository {
    requestAuthToken(dto: LoginStore): Promise<LoginEntity>
}