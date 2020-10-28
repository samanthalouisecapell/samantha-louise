import React from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

const Layout = (props) => {
    return (
        <>
            <div className="layout">
                <header>
                    <Header/>
                </header>
                <div className="layout-children">
                    {props.children}
                </div>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </>
    )

}

export default Layout