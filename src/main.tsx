import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {GoogleOAuthProvider} from "@react-oauth/google"
import {ThemeProvider} from "./providers/ThemeProvider.tsx"
import {LangProvider} from './providers/LangProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GoogleOAuthProvider clientId="467478225419-sdehof9oq5em40836lk7dvg7flm0lu5n.apps.googleusercontent.com">
            <ThemeProvider>
                <LangProvider>
                    <App/>
                </LangProvider>
            </ThemeProvider>
        </GoogleOAuthProvider>
    </StrictMode>,
)
