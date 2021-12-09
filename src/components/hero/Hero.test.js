import {render, screen} from "@testing-library/react"
import Hero from "./Hero"

describe("Hero component testing", function(){
    test("should render hero text", function(){
        render(<Hero />)
        const heroText = screen.getByTestId("hero-text")
        expect(heroText).toContainHTML("p")
        expect(screen.getByRole("heading")).toHaveTextContent(/what is/i)
    })
});