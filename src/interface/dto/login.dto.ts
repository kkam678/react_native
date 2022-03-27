export default class LoginDto {
    private account: string = ''
    private password: string = ''

    constructor() {

    }

    setAccount(value: string){
        this.account = value;
    }

    setPassword(value: string){
        this.password = value;
    }

    getAccount(): string{
        return this.account;
    }

    getPassword(): string{
        return this.password;
    }
}