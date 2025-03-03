import {Route, Routes} from "react-router";
import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="hero" element={<Hero />} />
                <Route path="footer" element={<Footer />} />
            </Routes>
        </>
    )
}
export default App
