import React from "react"
import MainBtn from "../mainbtn/MainBtn"
import { useAppContext } from "../../Context"

export default function Hero(){
    const {closeSubmenu} = useAppContext()

    return (
        <section 
            className="hero"
            onMouseOver={closeSubmenu}>
            <div className="hero-wrapper">
                <div className="hero-text">
                    <h2>Learn and find your <br/> dram job with us</h2>
                    <p>
                        Whether you're just beginning to figure out 
                        your future profession of you're looking 
                        to make a career change, trying to answer the 
                        question "What career is right for me?"
                    </p>
                </div>
                <MainBtn />
                <div className="hero-image"></div>
            </div>
        </section>
    )
}