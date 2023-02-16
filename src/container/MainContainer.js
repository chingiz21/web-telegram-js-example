import React from 'react'
import Footer from '../components/Footer'

function MainContainer({ children }) {
    return (
        <>
            {children}
            <Footer />
        </>
    )
}

export default MainContainer