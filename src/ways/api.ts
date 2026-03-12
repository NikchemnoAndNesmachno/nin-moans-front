const API_ROOT = "/api/v1"
const TOKEN_ROOT = API_ROOT + "/token"
const LOGIN = "/auth/login"
const REGISTER = "/auth/register"
const REFRESH = "/refresh"
const LOGOUT = "/logout"

const API = {
    root: API_ROOT,
    register: API_ROOT + REGISTER,
    login: API_ROOT + LOGIN,
    token: {
        root: TOKEN_ROOT,
        login: TOKEN_ROOT + LOGIN,
        register: API_ROOT + REGISTER,
        refresh: TOKEN_ROOT + REFRESH,
        logout: TOKEN_ROOT + LOGOUT
    },
}

export default API