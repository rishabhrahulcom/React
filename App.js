import React from "react";
import ReactDOM from "react-dom/client" // this is .d.ts file
import Body from "./component/bodyComponent";
import {createBrowserRouter} from "react-router-dom";
import headerComponent from "./component/headerComponent";

const AppLayout =()=>{
    return (
        <div className="app">

        <Body/>
            </div>
            );
                    };
// config -> what will happens when



const  root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);