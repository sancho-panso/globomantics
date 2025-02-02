import Banner from "./banner";
import HouseList from "./houseList";
import{useState} from "react";
import House from "./house";

const App = () => {
    const [selectedHouse, setSelectedHouse] = useState();

    const setSelectedHouseWrapper = (house) => {
        // here you can to do check if we pass house and its properties
        setSelectedHouse(house)
    };

    return (
        <> 
           <div>
                <Banner >
                    <div>Providing houses all around the world!!</div>
                </Banner>
            </div>
            {selectedHouse ? (<House house = {selectedHouse}/>) : 
            (<HouseList selectHouse={setSelectedHouseWrapper}/>)}
        </>

    )
};

export default App;