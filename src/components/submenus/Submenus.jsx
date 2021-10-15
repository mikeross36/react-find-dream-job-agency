import React from "react"
import { useAppContext } from "../../Context"
import { HashLink } from "react-router-hash-link"

export default function Submenus(){
    const {pageSublink:{links}, submenuCoordinates, isSubmenuOpen} = useAppContext()
    const submenusRef = React.useRef(null)
    const [columns, setColumns] = React.useState("col-2")

    React.useEffect(function(){
        setColumns("col-2")
        const submenus = submenusRef.current;
        const {center, bottom} = submenuCoordinates;
        submenus.style.left = `${center}px`
        submenus.style.top = `${bottom}px`

        if(links.length === 3){
            setColumns("col-3")
        }
        else if(links.length > 3){
            setColumns("col-4")
        }
    },[submenuCoordinates, links])

    return(
        <section 
            ref={submenusRef}
            className={`${isSubmenuOpen ? "submenus show-submenu" : "submenus"}`}>
            <div className={`submenu ${columns}`}>
                {links.map(function(link){
                    const {id, label, icon, url} = link;
                    return (
                        <div key={id} className="sublink">
                            <p>{icon}</p>
                            <HashLink
                                smooth to={url}>
                                {label}
                            </HashLink>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}