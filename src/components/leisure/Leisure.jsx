import React from "react"
import { leisureImgs } from "./data"
import { motion } from "framer-motion"
import { useAppContext } from "../../Context"

export default function Leisure(){
    const {closeSublink} = useAppContext()

    return(
        <section className="leisure" onMouseOver={closeSublink}>
            <motion.h1
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:.3, delay: .2}}
            >
                Learn and find your dream job with us 
            </motion.h1>
            <article className="leisure-images">
                {leisureImgs.map(function(leisure, i){
                    const {id, image} = leisure
                    return (
                        <motion.img key={id} src={image} alt="leisure"
                            initial={{opacity:0, translateX: i % 2 === 0 ? -50 : 50, translateY: -50}}
                            // initial={{opacity:0, translateX:-50, translateY: -50}}
                            animate={{opacity:1, translateX:0, translateY:0}}
                            transition={{duration: .2, delay: i * .1}}
                        >
                        </motion.img>
                    )
                })}
            </article>
        </section>
    )
}