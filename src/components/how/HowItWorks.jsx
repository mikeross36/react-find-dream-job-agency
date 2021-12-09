import React from "react"
import { howList } from "./data"
import {FaQuoteRight} from "react-icons/fa"
import molly from "../../images/woman.jpg"

export default function HowItWorks(){
    return (
        <section className="how-works" id="how">
            <div className="how-title">
                <h1>how it works</h1>
            </div>
            <div className="how-wrapper">
                <ul className="how-list">
                    {howList.map(function(item){
                        const {id, num, title, text} = item
                        return (
                            <li key={id} className="how-num">
                                <h2>{num}</h2>
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <article className="quote-post">
                <blockquote data-testid="blockquote">
                    <FaQuoteRight />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Alias dicta dolorem doloribus reprehenderit. Ut, vel qui 
                        explicabo repellendus quaerat minus alias fugiat dolor id 
                        praesentium nesciunt, quis voluptas, accusantium deserunt. 
                        Ipsa facilis obcaecati quia labore esse iste sed vero fugit 
                        laborum quidem! Iure voluptas molestias dignissimos iste animi 
                        repudiandae ullam?
                    </p>
                    <h4>Molly Crossin</h4>
                    <p>CEO at Industry Standard NY</p>
                </blockquote>
                <div className="image-wrapper">
                    <img src={molly} alt="molly" />
                </div>
            </article>
        </section>
    )
}