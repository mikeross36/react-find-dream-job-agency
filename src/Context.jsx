import React, {useState} from "react"
import { sublinks } from "./components/header/data"

const AppContext = React.createContext()

function AppProvider({children}){
    const [pageSublink, setPageSublink] = useState({page:"", links:[]})
    const [submenuCoordinates, setSubmenuCoordinates] = useState({})
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)

    const openSubmenu = function(pageLinkBtn, coordinates){
        const pageName = sublinks.find(function(sublink){
            return sublink.page === pageLinkBtn;
        })
        setPageSublink(pageName)
        setSubmenuCoordinates(coordinates)
        setIsSubmenuOpen(true)
    };

    const closeSubmenu = function(){
        setIsSubmenuOpen(false)
    };
    
    return (
        <AppContext.Provider
            value={{
                openSubmenu,
                closeSubmenu,
                pageSublink,
                submenuCoordinates,
                isSubmenuOpen
            }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return React.useContext(AppContext)
}

export {AppContext, AppProvider}