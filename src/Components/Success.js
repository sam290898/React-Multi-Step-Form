import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Data Saved Successfully" />
                    <h1>Your details have been saved Successfully.</h1>
                    <h3>We will get back to you soon via email.</h3>

                    <RaisedButton 
                        label="New Form"
                        primary={true}
                        style={styles.button}
                        onClick={() => window.location.reload()}
                    />
                    <br/>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success;

const styles = {
    button: {
        margin: 15
    }}


