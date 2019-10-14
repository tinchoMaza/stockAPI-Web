import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';

import { makeStyles, withStyles } from '@material-ui/styles';

import "./login.css"




const StyledButton = withStyles({
    root: {
        backgroundColor: '#2da7cb',
        color: 'white',
        marginTop: '24px',

        '&:hover': {
            backgroundColor: '#00789a',

        },
    },
})(Button)


const StyledTextField = withStyles({
    root: {
        '& label.Mui-focused': {
          color: '#2da7cb',
        },
        '& .MuiFilledInput-underline:after': {
          borderBottomColor: '#2da7cb',
          borderBottom: '4px solid',
        },
      },
  })(TextField);

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      width: '440px',
      height: '380px',
      marginTop: '76px',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5px',
    },
    textField: {
      width: 300,
      backgroundColor: '#eee',
      borderRadius: '5px',
      opacity: 1,
      color: '#fff'
    },
  }));


export default function LoginForm() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        username: '',
        password: '',
      });

    const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = (e) => {
        console.log(e)
    }
    
    return (
        <div className="form-container">
            <form className={classes.container} onSubmit={handleSubmit} noValidate autoComplete="off">            
            <StyledTextField
                    id="username"
                    label="Username"
                    value={values.username}
                    onChange={handleChange('username')}
                    type="text"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    margin="normal"
                    variant="filled"
            /> 
           
            <StyledTextField
                id="password"
                label="Password"
                value={values.password}
                onChange={handleChange('password')}
                type="password"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
                margin="normal"
                variant="filled"
            />

            <StyledButton>Sign in</StyledButton>
            
            </form>
        </div>
    )
}