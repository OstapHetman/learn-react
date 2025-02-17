import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const firebase = require("firebase");

class LoginComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            signInError: ''
        }
    }

    render() {
        const { classes } = this.props

        return(
            <main className={classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className={classes.form} onSubmit={(e) => this.submitLogin(e)}>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor="sigin-email-input">Enter your email</InputLabel>
                            <Input autoComplete='email' autoFocus id="sigin-email-input" onChange={e => this.userTyping('email', e)}></Input>
                        </FormControl>

                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor="sigin-password-input">Enter your password</InputLabel>
                            <Input type="password" autoFocus id="sigin-password-input" onChange={e => this.userTyping('password', e)}></Input>
                        </FormControl>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Log in</Button>
                    </form>
                    {
                        this.state.signInError ? <Typography className={classes.errorText} component='h5' variant='h6'>
                            {this.state.signInError}
                        </Typography> : null
                    }
                    <Typography component='h5' variant='h6' className={classes.noAccountHeader}>Don't have an account?</Typography>
                    <Link to="/signup" className={classes.signUpLink}>Sign up!</Link>
                </Paper>
            </main>
        )
    }

    userTyping = (type, e) => {
        switch (type) {
            case 'email':
                this.setState({ email: e.target.value })
                break;
            case 'password':
                this.setState({ password: e.target.value })
                break;
        }
    }

    submitLogin = e => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then( () => {
            this.props.history.push('/dashboard')
        }, err => {
            this.setState({ signInError: 'Server error' })
            console.log(err)
        })
    }
}

export default withStyles(styles)(LoginComponent)