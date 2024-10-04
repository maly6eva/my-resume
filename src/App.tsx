import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Projects} from "./layout/sections/projects/Projects";
import {Skills} from "./layout/sections/skills/Skills";
import {Footer} from "./layout/footer/Footer";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Particle} from "./components/ particle/ Particle";



function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

