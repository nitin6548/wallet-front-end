import React from "react";
import {Grid, Paper} from '@material-ui/core'
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";

const Signup = () => {
const paperStyle = {padding:'5% 0% 5% 5%', width:1500, margin: "20px auto" ,display: "flex",
flexDirection: "column"}
// const paperStyle={padding:'300px 50px', width:1500, margin: "50px auto"}
const headerStyle = {margin : 0, padding : '4% 0% 0% 0%'}
const buttonStyle= {marginTop : '40px', marginLeft : '85%', backgroundColor: '#3F51B5'}
const textFieldStyle=  {padding:  'auto 10px' , width: 300, marginTop: '5%', marginRight: '20%'}
    return(
        <Grid>
            <Paper variant= 'outline' elevation = {5} style = {paperStyle}>
                <Grid align ='left'>
                    <h2 style = {headerStyle}> Sign up as a New User</h2>

                </Grid>
                <form>
                    <Grid align = 'left'>
                    <TextField fullWidth label = 'First Name' name='firstname' margin='dense' style= {textFieldStyle} type = 'text' required/>
                    <TextField fullWidth label = 'Last Name' name='lastname' margin='dense' style= {textFieldStyle} type = 'text' required/><br></br>                   
                    <TextField fullWidth label = 'Contact Number' name='contactnumber' margin='dense' style= {textFieldStyle} type = 'tel' required/>
                    <TextField fullWidth label = 'Email ID' name='emailid' margin='dense' style= {textFieldStyle} type = 'email' required/><br></br>
                    <TextField fullWidth label = 'Username' name='username' margin='dense' style= {textFieldStyle} type = 'text' variant = 'outlined' required/><br></br>
                    <TextField fullWidth label = 'Password' name='password' margin='dense' style= {textFieldStyle} type = 'password' variant = 'outlined' required/><br></br>
                    <TextField fullWidth label = "Confirm Password" name='confirmpassword' margin='dense' style= {textFieldStyle} type = 'password' variant = 'outlined' required/><br></br>
                    </Grid>
                    <Button onClick = {console.log("butoon working")} align = 'right' type = 'submit' variant = 'contained'  style = {buttonStyle}>Sign Up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;