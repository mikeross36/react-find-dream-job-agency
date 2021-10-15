import React from "react"
import {FaCreditCard,FaBook,FaBriefcase} from "react-icons/fa"

export const sublinks = [
    {
        id: 1,
        page: "home",
        links: [
            {id:1,label:"team",icon:<FaCreditCard />, url:"#team"},
            {id:2,label:"connect",icon:<FaCreditCard />, url:"/home"},
            {id:3,label:"education",icon:<FaCreditCard />, url:"#how-works"}
        ]
    },
    {
        id: 2,
        page: "services",
        links: [
            {id:4,label:"help",icon:<FaBook />, url:"#services"},
            {id:5,label:"billings",icon:<FaBook />, url:"#services"},
            {id:6,label:"libraries",icon:<FaBook />, url:"#services"},
            {id:7,label:"plugins",icon:<FaBook />, url:"#services"}
        ]
    },
    {
        id: 3,
        page: "company",
        links: [
            {id:8,label:"about",icon:<FaBriefcase />, url:"#slider"},
            {id:9,label:"contact",icon:<FaBriefcase />, url:"#footer"},
        ]
    },
]
