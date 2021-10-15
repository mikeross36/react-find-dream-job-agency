import React from "react"
import {slides} from "./data"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Slider(){
    const [currentSlide, setCurrentSlide] = React.useState(0)

    const prevSlide = function(){
        setCurrentSlide(currentSlide === 0 ? slides.length -1 : currentSlide - 1)
    };

    const nextSlide = function (){
        setCurrentSlide(currentSlide === slides.length -1 ? 0 : currentSlide +1)
    };

    return (
        <section className="slider" id="slider">
            <h2>client testimonials</h2>
            <div className="slider-wrapper">
                {slides.map(function(slide, index){
                    const {id, image, name, title, quote} = slide;
                    
                    let position = "next-slide";
                    if(index === currentSlide){
                        position = "active-slide"
                    }
                    else if(index === currentSlide -1 || (currentSlide === 0 && index === slides.length -1)){
                        position = "prev-slide"
                    }

                    return (
                        <article 
                            key={id} 
                            className={`slide ${position}`}>
                            <img src={image} alt={name} />
                            <h3>{name}</h3>
                            <p className="title">{title}</p>
                            <p className="quote">{quote}</p>
                        </article>
                    )
                })}
            </div>
            <button className="prev-btn nav-btn"
                onClick={prevSlide}>
                <FaAngleLeft />
            </button>
            <button className="next-btn nav-btn"
                onClick={nextSlide}>
                <FaAngleRight />
            </button>
        </section>
    )
}