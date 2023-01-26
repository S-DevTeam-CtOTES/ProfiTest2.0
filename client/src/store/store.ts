import { makeAutoObservable } from "mobx";
import { IUser } from "../models/IUser";
import AuthService from "../service/AuthService";
import axios from 'axios'
import { AuthResponse } from "../models/response/AuthResponse";
import {REACT_API_URL} from '../http/index'

// const API_URL = `http://localhost:5000/api`

export default class Store {
    user = {} as IUser;
    isAuth = false;
    isLoading = false
    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            if (e instanceof Error) {
                console.log(e);
            }
        }
    }

    async registration(name:string,  email: string, password: string) {
        try {
            const response = await AuthService.registration(name, email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            if (e instanceof Error) {
                console.log(e.message);
            }
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e) {
            if (e instanceof Error) {
                console.log(e.message);
            }
        }
    }

    async checkAuth() {
        this.setLoading(true)
        try {
            const response = await axios.get<AuthResponse>(`${REACT_API_URL}/refresh`, {withCredentials: true});
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            if (e instanceof Error) {
                console.log(e.message);
            }
        } finally {
            this.setLoading(false)

        }
    }
}