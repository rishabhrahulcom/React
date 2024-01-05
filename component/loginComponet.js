import {useState} from "react";


const  loginComponet = ()=> {

    const[userName,setUserName] = useState(['']);
    const[password,setPassword] = useState(['']);

    const submitHandel = async ()={

    };

    return (
        <form onSubmit={submitHandel}
        <input type={"text"}
               value = {userName}
               on
        ></form>

    )

}
export default loginComponet();