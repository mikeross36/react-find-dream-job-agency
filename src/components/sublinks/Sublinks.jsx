import { useAppContext } from "../../Context"
import { HashLink } from "react-router-hash-link"
import { useRef, useEffect, useState } from "react"

export default function Sublinks(){
    const {pageSublink:{links}, isSublinkOpen, sublinkCoordinates} = useAppContext()
    const sublinkRef = useRef(null)
    const [columns, setColumns] = useState("col-2")

    useEffect(function(){
        setColumns("col-2")
        const sublinks = sublinkRef.current;
        const {center, bottom} = sublinkCoordinates;
        sublinks.style.left = `${center}px`
        sublinks.style.top = `${bottom}px`
    },[sublinkCoordinates])

    return (
        <section 
            ref={sublinkRef}
            className={`sublinks-wrapper ${isSublinkOpen && "show-sublinks"}`}>
            <div className={`sublinks ${columns}`}>
                {links.map(function(sublink){
                    const {id, label, icon, url} = sublink;
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