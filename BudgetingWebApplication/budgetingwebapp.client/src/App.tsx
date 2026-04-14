import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import Layout from "./Layout"
import { GoogleOAuthProvider } from '@react-oauth/google';



function App() {
    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="login" element={<LoginPage />} />
                </Route>    
        
            </Routes>
        </GoogleOAuthProvider>

    )
}


export default App;