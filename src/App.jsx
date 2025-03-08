import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import Way from "./components/Way.jsx";
import Header from "./components/Header.jsx";

const App = () => {
    return (
        <div className="pt-[1rem]">
            <Header/>
            <Navigation/>
            <Way/>
            <Footer/>

        </div>
    )
}
export default App
