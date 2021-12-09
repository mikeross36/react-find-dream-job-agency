import React from "react"
import {render, screen, fireEvent} from "@testing-library/react"
import Header from "./Header"
import {AppProvider} from "../../Context"
import {BrowserRouter} from "react-router-dom"

const mockedToggleMobMenu = jest.fn();

const MockHeader = function({toggleMobMenu}){
    return (
        <BrowserRouter>
            <Header toggleMobMenu={toggleMobMenu}/>
        </BrowserRouter>
    )
}

const HeaderRender = function(openSublink){
    return render(
        <AppProvider value={openSublink}>
            <MockHeader toggleMobMenu={mockedToggleMobMenu}/>
        </AppProvider>
    )
};

describe("testing header component", function(){
    test("should render header logo & clock", function(){
        HeaderRender(null)
        expect(screen.getByText("company logo here")).toBeTruthy()
        expect(screen.getByTestId("clock")).toBeTruthy()
    })

    test("should render mobile menu button functionality", function(){
        HeaderRender(null)
        const menuBtn = screen.getByTestId("menu-btn")
        fireEvent.click(menuBtn)
        expect(mockedToggleMobMenu).toBeCalled()
    })

    test("should render desktop links", function(){
        HeaderRender(null)
        expect(screen.getByRole("list")).toBeTruthy()
    })

    test("should render mobile links", function(){
        HeaderRender(null)
        expect(screen.getByTestId("mob-links")).toBeTruthy()
    })
});