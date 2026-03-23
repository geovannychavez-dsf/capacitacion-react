import type { InternalAxiosRequestConfig } from "axios";
const USERNAME_AUTH = import.meta.env.VITE_USERNAME_CHARACTER
const PASSWORD_AUTH = import.meta.env.VITE_USERNAME_CHARACTER
export const handleRequestCharter = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    config.auth = {
        username: USERNAME_AUTH,
        password: PASSWORD_AUTH
    }
    config.headers['Content-Type'] = 'application/json'
    return config
}