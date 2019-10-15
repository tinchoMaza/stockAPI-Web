import React from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';

import { Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';
import "./auth.css"

const PrimaryButton = withStyles({
    root: {
        backgroundColor: '#2da7cb',
        color: 'white',
        marginTop: '24px',

        '&:hover': {
            backgroundColor: '#00789a',

        },
    },
})(Button)

const SecondaryButton = withStyles({
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
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      width: '440px',
      height: '380px',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5px',
    },
    textField: {
      width: 300,
      borderRadius: '5px',

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
            {/* <SecondaryButton>Sign in</SecondaryButton> */}
            <PrimaryButton>Sign in</PrimaryButton>
        </form>
    )
}
