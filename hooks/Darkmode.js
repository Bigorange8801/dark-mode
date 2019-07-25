import { useEffect } from "react";
import { useLocalStorage } from "./UseLocalStorage";
import "./styles.scss";





function useDarkMode(){
    const [dark,setDark] = useLocalStorage(""){
        useEffect(()=> {
            if(dark === "true" {

            })
        })
    }
}