import React from "react"
import {people} from "./data"

export default function Team(){
    return(
        <section className="team" id="team">
            <h2>our people</h2>
            <div className="team-wrapper">
                {people.map(function(mate){
                    const {id, image, name, title, text, socialIcons} = mate;
                    return (
                        <div key={id} className="team-mate">
                            <img src={image} className="mate-img"alt="team mate" />
                            <div className="img-footer">
                                <h3>{name}</h3>
                                <h5>{title}</h5>
                                <p>{text}</p>
                                <div className="social-icons">
                                    {socialIcons.map(function(socIcon){
                                        const {id, url, icon} = socIcon;
                                        return (
                                            <a 
                                                key={id} 
                                                href={url}
                                                target="_blank"
                                                rel="noreferrer">
                                                {icon}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}