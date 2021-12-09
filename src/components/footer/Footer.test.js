import React from "react"
import {render} from "@testing-library/react"
import Footer from "./Footer"

describe("Footer component testing", function(){
    test("should render footer logo", function(){
        const {getByRole} = render(<Footer />)
        const logo = getByRole("heading")
        expect(logo).toHaveTextContent(/company logo here/i)
    })

    test("shuld render footer clock", function(){
        const {getByTestId} = render(<Footer />)
        const footerClock = getByTestId("clock")
        expect(footerClock).toHaveClass("footer-clock")
    })

    test("should render contact data: phone, email & address", function(){
        const {getByText} = render(<Footer />)
        const phone = getByText("+381 12 34 56 78")
        expect(phone).toBeTruthy()
        const email = getByText(/someemail@email.com/i)
        expect(email).toBeTruthy()
        const address = getByText(/Some Address 125 Novi Sad/i)
        expect(address).toBeTruthy()
    })

    test("should render footer links" , function(){
        const {getAllByTestId} = render(<Footer />)
        const footerLink = getAllByTestId("footer-link")
        expect(footerLink).toHaveLength(2)
    })

    test("should render copyright element", function(){
        const {getByTestId} = render(<Footer />)
        const copyright = getByTestId("copy")
        expect(copyright).toHaveTextContent("Copyriright 2020 DodaDesign All rights reserved")
    })
});