import { createContext, useState } from "react";


const ThemeContext = createContext();

function ThemeProviderWrapper(props){
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => { 
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
          {props.children} 
          {/* //app.js */}
        </ThemeContext.Provider>
    )
}
export { ThemeContext, ThemeProviderWrapper };