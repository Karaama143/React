import Projects from "./Pages/Projects";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Header from "./Components/Header";

const App = () => {

    return(
        <div className="container">
            <Header/>
            <Routes>
                <Route path="/" element = {<Projects/>}/>
                <Route path="/about" element = {<About/>}/>
                <Route path="/faq" element = {<Faq/>}/>
                <Route path="/contact" element = {<Contact/>}/>
            </Routes>
        </div>
    )
};

export default App;