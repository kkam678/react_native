export default class LoginEntity{
    public readonly accessToken: string

    constructor(
        accessToken: string,
    ) {
        this.accessToken = accessToken
    }
}