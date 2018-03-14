import React, { Component} from "react";
import HelloBootstrap from "./components/HelloBootstrap";
import NavBar from "./components/NavBar";


//This line of code is calling `React`
//Creating a new element <HelloBootstrap>
class App extends Component {
   render() {
    return(

    <div>
        <HelloBootstrap />
        <NavBar />
    </div>)
   }
}

export default App;

//es5 writes line 5 as
// ===========================================================
//      var App = function App() {
//          return React.createElement(HelloBootstrap, null);
//      };
// ===========================================================



