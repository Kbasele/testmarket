import React from 'react'
import Navigation from '../Components/Navigation'
import NavigationStyled from '../Components/NavigationStyled'



export default function HomePage() {
    return (
        <NavigationStyled>
            <Navigation className="navBar"showMarkets={true}/>
        </NavigationStyled>
    )
}
