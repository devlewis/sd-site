import React from "react";
import About from "./About";
import Media from "./Media";
import Footer from "./Footer";
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="All App-header">
                <h1>cellostory</h1>
                <p className="App-link">world music</p>
                <p className="App-link"> for two cellos</p>
                {/* <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a> */}
            </header >
            <About />
            <Media />
            <Footer />
        </div >
    );
}

export default App;