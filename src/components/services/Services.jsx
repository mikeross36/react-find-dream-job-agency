import React from "react"
import { services } from "./data"
import MainBtn from "../mainbtn/MainBtn";

export default function Services(){
    return(
        <section className="services" id="services">
            <h2>our services</h2>
            <div className="services-wrapper">
                {services.map(function(service){
                    const {id, image, title, text} = service;
                    return (
                        <div key={id} className="service-item">
                            <div className="front-end">
                                <img src={image} alt="service"/>
                            </div>
                            <div className="back-end">
                                <h2>{title}</h2>
                                <p>{text}</p>
                                <MainBtn />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}