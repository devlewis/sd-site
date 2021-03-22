import React from "react";
import '../App.css';
import EmailForm from "../EmailForm";
import SocialMedia from "../SocialMedia";

function Media() {
    return (
        <div className="App-header All Media">
            <iframe src="https://drive.google.com/file/d/1QM8JtyHcDoUSA8CVg-oInQ1axDimPj9E/preview" width="80%"></iframe>
            <EmailForm />
            <SocialMedia />
        </div>)
}

export default Media;