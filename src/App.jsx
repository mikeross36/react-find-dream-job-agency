import React, {useState} from "react"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Modal from "./components/modal/Modal"
import Submenus from "./components/submenus/Submenus"
import Services from "./components/services/Services"
import Team from "./components/team/Team"
import Slider from "./components/slider/Slider"
import HowItWorks from "./components/how/HowItWorks"
import Footer from "./components/footer/Footer"

export default function App(){
    const [clock, setClock] = useState(null)
    const [showMobMenu, setShowMobMenu] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const updateTime = function(){
        let time = new Date().toLocaleTimeString()
        setClock(time)
    };
	
	setInterval(updateTime, 100)

    const toggleMobMenu = function(){
        setShowMobMenu(!showMobMenu)
    };

    const openModal = function(){
        setShowModal(true)
    };

    const closeModal = function(){
        setShowModal(false)
    };

    return(
        <>
            <Modal 
                showModal={showModal}
                closeModal={closeModal}
            />
            <Header 
                clock={clock}
                toggleMobMenu={toggleMobMenu}
                showMobMenu={showMobMenu}
                setShowMobMenu={setShowMobMenu}
                openModal={openModal}
            />
            <Hero />
            <Submenus />
            <Services />
            <HowItWorks />
            <Team />
            <Slider />
            <Footer 
                clock={clock}
            />
        </>
    )
}