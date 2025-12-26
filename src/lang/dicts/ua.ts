import type {Lang} from "../types.ts"
import {languageCodes} from "../langCodes.ts";

const ua: Lang = {
    alert: {
        emailExists: "Така пошта вже існує!",
        loginSuccessful: "Вхід успішний!",
        signUpSuccessful: "Реєстрація успішна!",
        somethingWrong: "Щось пішло не так ...",
        userExists: "Такий користувач уже існує!"
    },
    validation: {
        emailNotCorrect: "Некоректна пошта",
        passwordMinSymbols: "Пароль мінімум 6 символів",
        passwordNotEqual: "Паролі не збігаються",
        userNameMinSymbols: "Мінімум 3 символи"
    },
    somethingElse: {
        wow: ""
    },
    code: languageCodes.ua,
    languageNames: {
        en: "Англійська",
        ua: "Українська"
    },
    titles: {
        currentThemesTitle: "Поточна тема",
        languagesTitle: "Мова",
        signUpTitle: "Реєстрація",
        loginTitle: "Вхід"
    },
    buttonTitles: {
        signUp: "Зареєструватися",
        goToSignUp: "Ще не зареєстровані?",
        goToLogin: "Уже зареєстровані? Ввійти",
        login: "Увійти",
        home: "Головна",
        account: "Профіль"
    },
    textTitles: {
        email: "Єпошта",
        login: "Вхід",
        userName: "Нікнейм",
        password: "Пароль",
        passwordRepeat: "Ще раз пароль",
        photo: "Фото"
    },
    errorTitles: {
        error404: {
            pageNotFound: "404 - Сторінку не знайдено",
            pageNotFoundText: "Ця сторінка видалена або неправильна адреса",
            videoNotFound: "404 - Відео не знайдено",
            videoNotFoundText: "Це відео видалене або неправильна адреса"
        },
    }
}
export default ua