// import Task from "./components/task1";
// import EventDemoApp from "./components/events";
// import Task2 from "./components/task2";

// import DataFetchExample from "./components/useEffect";

// import MyForm from "./Hooks/form1";

// import CarDetails from "./Hooks/useState";

// import Example from "./components/useEffect";

// import Car from "./components/useStateHook";

// import Status from "./components/switch";

// import Auth from "./components/logical";


// import Greeting from "./components/conditional";

import React, {useState} from "react";
import Parent from "./Hooks/useEffect/parent";

function App() {
    const [user, setUser] = useState("abc");
    return(

        <div>
            <h1>State drilling example</h1>
            <Parent user={user}/>
        </div>
        // <Task/>
        // <Task2/>
        // <EventDemoApp />
        // <Greeting/>
        // <Auth/>
        // <Status/>
        // <Car/>
        // <Example/>
        // <CarDetails/>
        // <MyForm/>
        // <DataFetchExample/>

        

    );
}
export default App;


