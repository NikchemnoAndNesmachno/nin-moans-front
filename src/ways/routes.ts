const LOGIN = "/login"
const REGISTER = "/register"
const VIDEO = "/video"
const ACCOUNT = "/account"
const CONTACTS = "/contacts"
const HELP = "/help"
const THEMES = "/themes"
const ADD = "/add"
const LANGS = "/languages"
const NOTFOUND = "*"
const NOTFOUND_VIDEOS = VIDEO + "/*"

const ROUTE_PATHS = {
    index: "/",
    login: LOGIN,
    register: REGISTER,
    video: {
        path: VIDEO + "/:id",
        link: (id: string | number) => VIDEO + `/${id}`
    },
    account: ACCOUNT,
    contacts: CONTACTS,
    help: HELP,
    themes: THEMES,
    add: ADD,
    langs: LANGS,
    notFound: NOTFOUND,
    notFoundVideos: NOTFOUND_VIDEOS,
}

export default ROUTE_PATHS