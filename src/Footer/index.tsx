import React, { FC } from "react";
import DSC from "../Images/DSC.jpg"

const Footer: FC = () => {
    return (
        <div className={"All Footer"}>
            <img style={{ width: "80vw" }} src={DSC} alt="headshot" />
            <p>Copyright &copy; Devree Lewis 2021</p>
        </div >
    );
}

export default Footer;