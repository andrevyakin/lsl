import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import YMap from "./components/YMap.jsx";

const App = () => {
    return (
        <div className="pt-[1rem]">
            <Navigation/>
            <Header/>
            <YMap/>

        </div>
    )
}
export default App
