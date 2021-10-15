import React from "react"
import {useSpring, animated} from "react-spring"
import aja from "../../images/aja2.jpg"
import MainBtn from "../mainbtn/MainBtn"
import {FaTimes} from "react-icons/fa"
import useOutsideClick from "../../hooks/UseOutsideClick"

export default function Modal({showModal, closeModal}){
    const modalRef = React.useRef();
    useOutsideClick(modalRef, function(){
        closeModal()
    })

    const animation = useSpring({
        config: {duration: 250},
        opacity: showModal ? 1 : 0,
        transform: showModal ? "translateY(0%)" : "translateY(-100%)"
    })

    const keyPress = React.useCallback(function(e){
        if(e.key === "Escape" && showModal){
            closeModal()
        }
    },[showModal, closeModal])

    React.useEffect(function(){
        document.addEventListener("keydown", keyPress)
        return function(){
            document.removeEventListener("keydown", keyPress)
        }
    },[keyPress])

    return (
        <>
            {showModal && (
                <div className="modal-layout">
                    <animated.div style={animation}>
                        <div className="modal-wrapper"
                            ref={modalRef}>
                            <img src={aja} alt="modal image" />
                            <div className="modal-content">
                                <h3>Are you ready?</h3>
                                <h4>to find your dream job!</h4>
                                <MainBtn />
                                <span 
                                    className="close-modal"
                                    onClick={closeModal}>
                                    <FaTimes />
                                </span>
                            </div>
                        </div>
                    </animated.div>
                </div>
            )}
        </>
    )
}