import {render, screen} from "@testing-library/react"
import Leisure from "./Leisure"
import {AppProvider} from "../../Context"

const LeisureRender = function(closeSublink){
    return render(
        <AppProvider value={closeSublink}>
            <Leisure />
        </AppProvider>
    )
};

describe("testing component", function(){
    test("should render title", function(){
        LeisureRender(null)
        expect(screen.getByRole("heading")).toHaveTextContent("Learn and find your dream job with us")
    })

    test("should render leisure images", function(){
        LeisureRender(null)
        const images = screen.getAllByAltText("leisure")
        expect(images).toHaveLength(12)
    })
})