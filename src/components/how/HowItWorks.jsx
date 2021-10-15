import React from "react"
import { FaQuoteRight } from "react-icons/fa"
import woman from "../../images/woman.jpg"

export default function HowItWorks(){
    return (
        <section className="how-works" id="how-works">
            <div className="how-title">
                <h2>how it works</h2>
            </div>
            <div className="how-wrapper">
                <ul className="how-list">
                    <li className="how-num">
                        <h2>1</h2>
                        <h4>They help others</h4>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Recusandae, expedita.
                        </p>
                    </li>
                    <li className="how-num">
                        <h2>2</h2>
                        <h4>They are engaging</h4>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Recusandae, expedita.
                        </p>
                    </li>
                    <li className="how-num">
                        <h2>3</h2>
                        <h4>They use your talents</h4>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Recusandae, expedita.
                        </p>
                    </li>
                </ul>
            </div>
           
            <article className="quote-post">
                <blockquote>
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
                    <img src={woman} alt="woman" />
                </div>
            </article>
        </section>
    )
}