import React from "react";
import "./App.css";
import Videos from "./Components/Videos/Videos";

function App() {
    if (window.innerWidth <= 768) {
        return (
            <div className="App">
                <Videos />
            </div>
        );
    } else {
        return <h1>This websites runs on phones</h1>;
    }
}
export default App;
