import type {Lang} from "../types.ts"
import {languageCodes} from "../langCodes.ts"
const en: Lang = {
    alert: {
        emailExists: "not implemented",
        loginSuccessful: "not implemented",
        signUpSuccessful: "not implemented",
        somethingWrong: "not implemented",
        userExists: "not implemented"
    },
    validation: {
        emailNotCorrect: "not implemented",
        passwordMinSymbols: "not implemented",
        passwordNotEqual: "not implemented",
        userNameMinSymbols: "not implemented"
    },
    somethingElse: {
        wow: ""
    },
    code: languageCodes.en,
    languageNames: {
        en: "English",
        ua: "Ukrainian"
    },
    titles: {
        currentThemesTitle: "Current theme",
        languagesTitle: "Language",
        signUpTitle: "Sign Up",
        loginTitle: "Log In"
    },
    buttonTitles: {
        signUp: "Sign up",
        login: "Sign in",
        goToSignUp: "Don't have an account yet?",
        goToLogin: "Already have an account? Sign in",
        home: "Home",
        account: "Account",
    },
    textTitles: {
        email: "Email",
        login: "Login",
        userName: "Username",
        password: "Password",
        passwordRepeat: "Repeat password",
        photo: "Photo"
    },
    errorTitles: {
        error404: {
            pageNotFound: "404 - page not found",
            pageNotFoundText: "Such page is deleted or url is wrong",
            videoNotFound: "404 - video not found",
            videoNotFoundText: "Such video is deleted or url is wrong"
        }
    }
}
export default en