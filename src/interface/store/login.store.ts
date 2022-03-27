import {observer} from "mobx-react";
import {Component} from "react";
import {action, makeAutoObservable, observable} from "mobx";

export default class LoginStore {
    @observable
    private account: string = ''
    @observable
    private password: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    @action
    setAccount(account: string) {
        this.account = account
    }

    @action
    setPassword(password: string) {
        this.password = password
    }

    getAccount(): string {
        return this.account
    }

    getPassword(): string {
        return this.password
    }
}