import {BrowserRouter, Routes, Route} from "react-router-dom"
import ROUTE_PATHS from "./ways/routes.ts"
import HomePage from "./pages/HomePage.tsx"
import LoginPage from "./pages/LoginPage.tsx"
import RegisterPage from "./pages/RegisterPage.tsx"
import VideoPage from "./pages/VideoPage.tsx"
import Navbar from './components/Navbar';
import {Container} from '@mui/material';
import {Toaster} from "react-hot-toast"
import {AuthProvider} from "./context/AuthContext.tsx"
import ThemePage from "./pages/ThemePage.tsx";
import LangPage from "./pages/LangPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import WaitingIcon from "./assets/logomm3.svg"

const App = () => {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar title="My first "/>
                <Toaster position="top-center" toastOptions={{
                    loading:{
                        icon: <img src={WaitingIcon} alt="W"/>
                    }
                }}/>
                <Container>
                    <Routes>
                        <Route path={ROUTE_PATHS.index} element={<HomePage/>}/>
                        <Route path={ROUTE_PATHS.login} element={<LoginPage/>}/>
                        <Route path={ROUTE_PATHS.register} element={<RegisterPage/>}/>
                        <Route path={ROUTE_PATHS.video.path} element={<VideoPage/>}/>
                        <Route path={ROUTE_PATHS.themes} element={<ThemePage/>}/>
                        <Route path={ROUTE_PATHS.langs} element={<LangPage/>}/>
                        <Route path={ROUTE_PATHS.notFound} element={<NotFoundPage isVideo={false}/>}/>
                        <Route path={ROUTE_PATHS.notFoundVideos} element={<NotFoundPage isVideo={true}/>}/>
                    </Routes>
                </Container>
            </BrowserRouter>
        </AuthProvider>
    );
};

export default App
