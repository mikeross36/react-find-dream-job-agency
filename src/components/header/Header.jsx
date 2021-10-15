import React from "react"
import {sublinks} from "./data"
import {HashLink} from "react-router-hash-link"
import { useAppContext } from "../../Context";

export default function Header({clock, toggleMobMenu, showMobMenu, setShowMobMenu, openModal}){
    const {openSubmenu, closeSubmenu} = useAppContext()

    const closeMobMenu = function(){
        setShowMobMenu(false)
    };

    const displaySubmenu = function(e){
        const pageLinkBtn = e.target.textContent;
        const pageLinkRect = e.target.getBoundingClientRect()
        const center = ((pageLinkRect.left + pageLinkRect.right) / 2)
        const bottom = pageLinkRect.bottom + 5;

        openSubmenu(pageLinkBtn, {center, bottom})
    };

    const handleCloseSubmenu = function(e){
        if(!e.target.classList.contains("link-btn")){
            closeSubmenu()
        }
    };

    return (
        <header onMouseOver={handleCloseSubmenu}>
            <nav>
                <div className="header-logo">
                    <span className="logo">company logo here</span>
                    <span className="header-clock">{clock}</span>
                </div>
                <div className="menu-btn"
                    onClick={toggleMobMenu}>
                    <span className={`burger ${showMobMenu && "open"}`}></span>
                    <span className={`burger ${showMobMenu && "open"}`}></span>
                    <span className={`burger ${showMobMenu && "open"}`}></span>
                </div>
                <ul className="desktop-links">
                    <li className="link-wrapper">
                        <span className="link-btn"
                            onMouseOver={displaySubmenu}>
                            home
                        </span>
                    </li>
                    <li className="link-wrapper">
                        <span className="link-btn"
                            onMouseOver={displaySubmenu}>
                            services
                        </span>
                    </li>
                    <li className="link-wrapper">
                        <span className="link-btn"
                            onMouseOver={displaySubmenu}>
                            company
                        </span>
                    </li>
                </ul>
                <button className="signin-btn"
                    onClick={openModal}>sign in</button>
            </nav>
            <div className={`mobile-links ${showMobMenu ? "fade-in" : "fade-out"}`}>
                {sublinks.map(function(sublink){
                    const {id, page, links} = sublink;
                    return (
                        <div key={id}className="sublink">
                            <span className="page">{page}</span>
                            <div className="links">
                                {links.map(function(link){
                                    const {id, label, icon, url} = link;
                                    return (
                                        <HashLink
                                            onClick={closeMobMenu}
                                            key={id}
                                            smooth to={url}>
                                            {icon}
                                            {' '}
                                            {label}
                                        </HashLink>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </header>
    )
}