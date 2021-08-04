import {makeStyles} from '@material-ui/core/styles' 

export default makeStyles((theme) => ({
	selectContainer: {
		display: "flex",
		justifyContent: "center",
		padding: "20px 40px",
	},
	serviceButton: {
        marginTop: "15px",  
		color: "primary",
		variant: "contained"
    }
}));