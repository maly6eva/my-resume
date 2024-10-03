import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Menu} from "./components/menu/Menu";
import {Main} from "./layout/sections/main/Main";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Projects} from "./layout/sections/projects/Projects";
import {Skills} from "./layout/sections/skills/Skills";
import {Footer} from "./layout/footer/Footer";
import {Contacts} from "./layout/sections/contacts/Contacts";



function App() {
    return (
        <div className="App">
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

