import {useState} from "react"
import Header from "./components/header/Header"
import Leisure from "./components/leisure/Leisure"
import Sublinks from "./components/sublinks/Sublinks"
import Hero from "./components/hero/Hero"
import Modal from "./components/modal/Modal"
import Services from "./components/services/Services"
import HowItWorks from "./components/how/HowItWorks"
import Team from "./components/team/Team"
import Footer from "./components/footer/Footer"

export default function App(){
  const [clock, setClock] = useState(null)
  const [showMobMenu, setShowMobMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const updateTime = function(){
    let time = new Date().toLocaleTimeString()
    setClock(time)
  }
  setInterval(updateTime, 100)

  const toggleMobMenu = function(){
    setShowMobMenu(!showMobMenu)
  };

  const closeMobMenu = function(){
    setShowMobMenu(false)
  };

  const openModal = function(){
    setShowModal(true)
  };

  const closeModal = function(){
    setShowModal(false)
  };

  return (
    <>
      <Modal 
        showModal={showModal}
        closeModal={closeModal}
      />
      <Header 
        clock={clock}
        toggleMobMenu={toggleMobMenu}
        showMobMenu={showMobMenu}
        closeMobMenu={closeMobMenu}
        openModal={openModal}
      />
      <Leisure />
      <Sublinks />
      <Hero />
      <Services />
      <HowItWorks />
      <Team/>
      <Footer clock={clock}/>
    </>
  )
}