import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title= "Enter Personal Details" />
                    
                    <TextField 
                        hintText= "Enter your Occupation"
                        floatingLabelText="What do you do ? "
                        onChange={handleChange("occupation")    }
                        defaultValue={values.occupation}

                    />
                    <br/>
                    <TextField 
                        hintText= "Enter your City"
                        floatingLabelText="Where are you from ?"
                        onChange={handleChange("city")}
                        defaultValue={values.city}
                    />
                    <br/>

                    <TextField 
                        hintText= ""
                        floatingLabelText="About You"
                        onChange={handleChange("bio")}
                        defaultValue={values.bio}

                    />                    
                    <br/>
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />


                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormPersonalDetails;

const styles = {
    button: {
        margin: 15
    }}


