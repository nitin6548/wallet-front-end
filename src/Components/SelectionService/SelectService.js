import React from 'react'
import styles from "./SelectServiceStyles";
import { useHistory } from "react-router-dom";
//import { Router } from '../Router/Router';


const SelectService = (props) => {

  const classes = styles();
  const history = useHistory();
  
  // function redirectToDepositAmount(){
  //   console.log("aaa")
  //   return <Redirect to = "/src/Components/DepositAmount/DepositAmount.js" /> 
		//history.push('/DepositAmount');
	// }
  
  // function redirectToWithdrawAmount() {
	// 	history.push("/WithdrawAmount");
	// }
  
  // function redirectToTotalAmount() {
	// 	history.push("/TotalAmount");
	// }
  
  return (
    <div className = {classes.serviceContainer}>
    <button 
    className = {classes.serviceButton} 
     onClick = {() => {this.history.push('/DepositAmount')}}
     >
      Deposit Amount
      </button> 
    <br />
    <button 
    className = {classes.serviceButton} 
    onClick = {()=> {this.history.push("/WithdrawAmount")}} 
    >
       Withdraw Amount
      </button> 
    <br />
    <button 
    className = {classes.serviceButton} 
    onClick = {()=> {this.history.push("/TotalAmount")}} 
    >
       Total Amount
      </button> 
    <br />
    </div>
  )
}

export default SelectService;
