import {render, screen} from "@testing-library/react"
import HowItWorks from "./HowItWorks"

describe("testing How component", function(){
    test("should render how list", function(){
        render(<HowItWorks />)
        const howList = screen.getByRole("list")
        expect(howList).toHaveClass("how-list")
    })

    test("should render blockquote element", function(){
        render(<HowItWorks />)
        const blockquote = screen.getByTestId("blockquote")
        expect(blockquote).toContainHTML("p")
        const molly = screen.getByText(/Molly Crossin/i)
        expect(molly).toBeTruthy()
    })
})