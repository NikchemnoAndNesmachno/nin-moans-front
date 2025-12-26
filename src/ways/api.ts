const API_ROOT = "/api"
const TOKEN_ROOT = API_ROOT + "/token"
const LOGIN = "/login"
const REGISTER = "/register"
const REFRESH = "/refresh"
const LOGOUT = "/logout"

const API = {
    root: API_ROOT,
    token: {
        root: TOKEN_ROOT,
        login: TOKEN_ROOT + LOGIN,
        register: TOKEN_ROOT + REGISTER,
        refresh: TOKEN_ROOT + REFRESH,
        logout: TOKEN_ROOT + LOGOUT
    },
}

export default API