import React, { Component } from 'react'
import Chronometer from './components/Chronometer'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body{
        font-family:'arial';
        background-color:#222;
        color:#387EF5;
        text-align:center;
        letter-spacing:1px;
    }
`

class App extends Component {

    render() {
        return (
            <>  
                <GlobalStyle />
                <h1>Chronometer</h1>
                <Chronometer />
            </>
        )
    }
}


export default App;