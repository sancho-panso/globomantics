import Banner from "./banner";
import HouseList from "./houseList";
import{useState, useCallback} from "react";
import House from "./house";
import navValues from "../helpers/navValues";
import React from "react";
import ComponentPicker from "./componentPicker";

const navigationContext = React.createContext(navValues.home)

const App = () => {
    const navigate = useCallback(
        (navTo, param) => setNav({current:navTo, param, navigate}),[]
    );
    const [nav, setNav] =useState({current:navValues.home, navigate})
    return (
        <navigationContext.Provider value ={nav}> 
                <Banner >
                    <div>Providing houses all around the world!!</div>
                </Banner>
                <ComponentPicker currentNavLocation={nav.current}/>
        </navigationContext.Provider> 
    )
};

export {navigationContext};
export default App;