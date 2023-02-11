import Profile from "./pages/profile";
import { createContext, useState } from "react";
export const ApiContext = createContext(null)

function App() {
    const [api, setApi] = useState(false)
    return (
        <ApiContext.Provider value={api}>
            <Profile setApi={setApi} />
        </ApiContext.Provider>
    );
}

export default App;