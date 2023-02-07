import Profile from "./pages/profile";
import React from "react";
const ApiContext = React.createContext(false)

function App() {
    return (
        <ApiContext.Provider value={false}>
            <Profile />
        </ApiContext.Provider>
    );
}

export default App;