import React from "react";
import {useEffect, useState} from "react";
import SomeRandomText from "./SomeRandomText";
import "./App.css";

function App() {
    const fixedText = "I am fixed :)";
    const whenNotFixed = "Main header";


    const [headerText, setHeaderText] = useState(whenNotFixed);
    useEffect(() => {
        const header = document.getElementById("myHeader");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
                if (headerText !== fixedText) {
                    setHeaderText(fixedText);
                }
            } else {
                header.classList.remove("sticky");
                if (headerText !== whenNotFixed) {
                    setHeaderText(whenNotFixed);
                }
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    return (
        <div>
            <header className="mainHeader header">HEADER</header>
            <SomeRandomText/>
            <header id="myHeader" className="header">
                {headerText}
            </header>
            <SomeRandomText/>
        </div>
    );
}

export default App;
