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

class SignupComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            confrimPassword: null,
            signupError: null
        }
    }

    render() {

        const { classes } = this.props;

        return(
         <main className={classes.main}>
             <CssBaseline></CssBaseline>
             <Paper className={classes.paper}>
                <Typography component="h1" variant='h5'>
                    Sign Up!
                </Typography>
                <form onSubmit={(e) => this.submitSignup(e)} className={classes.form}>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor="signup-email-input">Enter your email</InputLabel>
                        <Input autoComplete='email' autoFocus id="signup-email-input" onChange={e => this.userTyping('email', e)}></Input>
                    </FormControl>

                    <FormControl required fullWidth margin='normal'>
                        <InputLabel  htmlFor="signup-password-input">Enter your password</InputLabel>
                        <Input autoComplete='password' type="password" autoFocus id="signup-password-input" onChange={e => this.userTyping('password', e)}></Input>
                    </FormControl>

                    <FormControl required fullWidth margin='normal'>
                        <InputLabel  htmlFor="signup-password-confirm-input">Confirm your password</InputLabel>
                        <Input autoComplete='password' type="password" autoFocus id="signup-password-confirm-input" onChange={e => this.userTyping('password-confirm', e)}></Input>
                    </FormControl>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Submit</Button>
                </form>
                {
                    this.state.signupError ? <Typography className={classes.errorText} component='h5' variant='h6'>
                        {this.state.signupError}
                    </Typography> : null
                }
                <Typography component='h5' variant='h6' className={classes.hasAccountHeader}>Already have account ?</Typography>
                <Link to="/signin" className={classes.logInLink}>Log In!</Link>
             </Paper> 
         </main>
        )
    }

    formIsValid = () => this.state.password === this.state.confrimPassword

    submitSignup = (e) => {
        e.preventDefault();
        if (!this.formIsValid()) {
            this.setState({ signupError: 'Passwords do not match' })
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
                const userObj = {
                    email: res.user.email
                }
                firebase
                    .firestore()
                    .collection('users')
                    .doc(this.state.email)
                    .set(userObj)
                    .then(() => {
                        this.props.history.push('/dashboard')
                    }, dbErr => {
                        this.setState({ signupError: 'Failed to add User' })
                    })
            }, authErr => {
                console.log(authErr)
                this.setState({ signupError: 'Failed to add User' })
            })
        }

    userTyping = (type, e) => {
        switch (type) {
            case 'email':
                this.setState({ email: e.target.value })
                break;
            case 'password':
                this.setState({ password: e.target.value })
                break;
            case 'password-confirm':
                this.setState({ confrimPassword: e.target.value })
                break;
        }
    }
}

export default withStyles(styles)(SignupComponent);