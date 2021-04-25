import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    
    continue = e => {
        e.preventDefault();

        //process to and fro back end//

        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: {firstName, lastName, email, occupation, city, bio} } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title= "Confirm Details" />
                    
                    <List>
                        <ListItem 
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <br/>

                        <ListItem 
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <br/>

                        <ListItem 
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <br/>

                        <ListItem 
                            primaryText="You are "
                            secondaryText={occupation}
                        />
                        <br/>

                        <ListItem 
                            primaryText="You live in "
                            secondaryText={city}
                        />
                        <br/>

                        <ListItem 
                            primaryText="Things you told us about you"
                            secondaryText={bio}
                        />
                        <br/>
                        </List>

                        <br/>
                    <RaisedButton 
                        label="Confirm"
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
                    <br/>

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Confirm;

const styles = {
    button: {
        margin: 15
    }}



