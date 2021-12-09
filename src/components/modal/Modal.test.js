import {render, act, screen} from "@testing-library/react"
import Modal from "./Modal"

describe("Modal component testing", function(){
    test("should render modal wrapper", function(){
        act(function(){
            render(<Modal showModal={true}/>)
            expect(screen.getByTestId("modal")).toBeTruthy()
        })
    })

    test("should render modal image", function(){
        act(function(){
            render(<Modal showModal={true}/>)
            expect(screen.getByAltText("aja")).toBeVisible()
        })
    })

    test("should render modal content with elements", function(){
        act(function(){
            render(<Modal showModal={true}/>)
            expect(screen.getByText("Are you ready?")).toBeTruthy()
            expect(screen.getByText("to find your dream job")).toBeTruthy()
            expect(screen.getByTestId("close")).toHaveClass("close-modal")
        })
    })
})