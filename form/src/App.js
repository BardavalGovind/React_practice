 import FormApp from "./component/submit";
// import Navigate from "./Routing/Navigation";
// import Fun from "./Routing/route";

// import Student from "./component/act2";
// import App1 from "./component/GetPost";
// import Act from "./component/activity";


// function App() {
//   return (
//     <div className="App">
       <FormApp/> 
//       {/* <Act/> */}
//       {/* <App1/> */}
//      {/* <Student/> */}
//      {/* <Fun/> */}
//      {/* <Navigate/> */}
//     </div>
//   );
// }

// export default App;  


import { Provider } from "react-redux"
import { useStore} from "react-redux"

function App(){
  return(
    <Provider store={sore}>
      <div></div>
    </Provider>
  );
}
export default App;