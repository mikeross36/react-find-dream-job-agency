import React from "react"
import nextId from "react-id-generator"
import {FaCreditCard,FaBook,FaBriefcase} from "react-icons/fa"

export const sublinks = [
    {
        id: nextId(),
        page: "home",
        links: [
            {id:1,label:"team",icon:<FaCreditCard />, url:"#team"},
            {id:2,label:"connect",icon:<FaCreditCard />, url:"/home"},
            {id:3,label:"education",icon:<FaCreditCard />, url:"#how-works"}
        ]
    },
    {
        id: nextId(),
        page: "services",
        links: [
            {id:4,label:"help",icon:<FaBook />, url:"#services"},
            {id:5,label:"billings",icon:<FaBook />, url:"#services"},
            {id:6,label:"libraries",icon:<FaBook />, url:"#services"},
            {id:7,label:"plugins",icon:<FaBook />, url:"#services"}
        ]
    },
    {
        id: nextId(),
        page: "company",
        links: [
            {id:8,label:"about",icon:<FaBriefcase />, url:"#slider"},
            {id:9,label:"contact",icon:<FaBriefcase />, url:"#footer"},
        ]
    },
]
