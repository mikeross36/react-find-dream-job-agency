import React from 'react'
import nextId from "react-id-generator"
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"
import mate1 from "../../images/mate1.jpg"
import mate2 from "../../images/mate2.jpg"
import mate3 from "../../images/mate3.jpg"
import mate4 from "../../images/mate4.jpg"
import mate5 from "../../images/mate5.jpg"
import mate7 from "../../images/mate7.jpg"

export const people = [
    {
        id: nextId(),
        image: mate1,
        name: "john doe",
        title: "front-end developer",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum beatae odit autem minima deleniti quis cupiditate voluptatibus vitae modi consequuntur.",
        socialIcons : [
            {id:nextId(),url:"https://twitter.com/login?lang=en",icon:<FaTwitter/>},
            {id:nextId(),url:"https://www.facebook.com/",icon:<FaFacebook/>},
            {id:nextId(),url:"https://www.instagram.com/accounts/login/",icon:<FaInstagram/>},
            {id:nextId(),url:"https://rs.linkedin.com/",icon:<FaLinkedin/>},
        ]
    },
    {
        id: nextId(),
        image: mate2,
        name: "jane doe",
        title: "front-end developer",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum beatae odit autem minima deleniti quis cupiditate voluptatibus vitae modi consequuntur.",
        socialIcons : [
            {id:nextId(),url:"https://twitter.com/login?lang=en",icon:<FaTwitter/>},
            {id:nextId(),url:"https://www.facebook.com/",icon:<FaFacebook/>},
            {id:nextId(),url:"https://www.instagram.com/accounts/login/",icon:<FaInstagram/>},
            {id:nextId(),url:"https://rs.linkedin.com/",icon:<FaLinkedin/>},
        ]
    },
    {
        id: nextId(),
        image: mate3,
        name: "john doe",
        title: "front-end developer",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum beatae odit autem minima deleniti quis cupiditate voluptatibus vitae modi consequuntur.",
        socialIcons : [
            {id:nextId(),url:"https://twitter.com/login?lang=en",icon:<FaTwitter/>},
            {id:nextId(),url:"https://www.facebook.com/",icon:<FaFacebook/>},
            {id:nextId(),url:"https://www.instagram.com/accounts/login/",icon:<FaInstagram/>},
            {id:nextId(),url:"https://rs.linkedin.com/",icon:<FaLinkedin/>},
        ]
    },
    {
        id: nextId(),
        image: mate4,
        name: "john doe",
        title: "front-end developer",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum beatae odit autem minima deleniti quis cupiditate voluptatibus vitae modi consequuntur.",
        socialIcons : [
            {id:nextId(),url:"https://twitter.com/login?lang=en",icon:<FaTwitter/>},
            {id:nextId(),url:"https://www.facebook.com/",icon:<FaFacebook/>},
            {id:nextId(),url:"https://www.instagram.com/accounts/login/",icon:<FaInstagram/>},
            {id:nextId(),url:"https://rs.linkedin.com/",icon:<FaLinkedin/>},
        ]
    },
    {
        id: nextId(),
        image: mate5,
        name: "john doe",
        title: "front-end developer",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum beatae odit autem minima deleniti quis cupiditate voluptatibus vitae modi consequuntur.",
        socialIcons : [
            {id:nextId(),url:"https://twitter.com/login?lang=en",icon:<FaTwitter/>},
            {id:nextId(),url:"https://www.facebook.com/",icon:<FaFacebook/>},
            {id:nextId(),url:"https://www.instagram.com/accounts/login/",icon:<FaInstagram/>},
            {id:nextId(),url:"https://rs.linkedin.com/",icon:<FaLinkedin/>},
        ]
    },
    {
        id: nextId(),
        image: mate7,
        name: "jane doe",
        title: "front-end developer",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum beatae odit autem minima deleniti quis cupiditate voluptatibus vitae modi consequuntur.",
        socialIcons : [
            {id:nextId(),url:"https://twitter.com/login?lang=en",icon:<FaTwitter/>},
            {id:nextId(),url:"https://www.facebook.com/",icon:<FaFacebook/>},
            {id:nextId(),url:"https://www.instagram.com/accounts/login/",icon:<FaInstagram/>},
            {id:nextId(),url:"https://rs.linkedin.com/",icon:<FaLinkedin/>},
        ]
    },
]