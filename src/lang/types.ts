import {type LangCode} from "./langCodes.ts"

export interface Lang {
    code: LangCode
    languageNames: Record<LangCode, string>
    errorTitles: {
        error404: {
            pageNotFound: string,
            pageNotFoundText: string,
            videoNotFound: string,
            videoNotFoundText: string
        }
    }
    titles: {
        currentThemesTitle: string
        languagesTitle: string,
        signUpTitle: string,
        loginTitle: string,
    }
    validation: {
        userNameMinSymbols: string,
        emailNotCorrect: string,
        passwordMinSymbols: string,
        passwordNotEqual: string
    }
    alert: {
        somethingWrong: string,
        userExists: string,
        emailExists: string,
        signUpSuccessful: string,
        loginSuccessful: string
    }
    somethingElse: {
        wow: string
    }
    buttonTitles: {
        home: string,
        account: string,
        signUp: string,
        login: string,
        goToSignUp: string,
        goToLogin: string,
    }
    textTitles: {
        email: string,
        login: string,
        userName: string,
        password: string,
        passwordRepeat: string,
        photo: string,
    }
}