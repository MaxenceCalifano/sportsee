import Profile from "./pages/profile";
import { createContext, useState } from "react";
export const ApiContext = createContext(null)

function App() {
    const [api, setApi] = useState(false)
    const value = { api, setApi }
    return (
        <ApiContext.Provider value={value}>
            <Profile />
        </ApiContext.Provider>
    );
}

export default App;