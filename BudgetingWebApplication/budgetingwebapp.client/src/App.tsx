import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/LoginPage"
import Layout from "./Layout"



function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<LandingPage />} />
                <Route path="home" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
            </Route>    
       
        </Routes>

    )
}


export default App;