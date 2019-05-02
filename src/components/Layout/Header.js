import React from 'react'
import Typography from '@material-ui/core/Typography'
import logo from "../../logo.png"

const Header = () => (
    <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Typography variant="h4" color="inherit" gutterBottom>
                Books on Tap
            </Typography>
        </header>             
    </div>
)

export default Header