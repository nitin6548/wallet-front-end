import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TotalAmount from '../TotalAmount'
import DepositAmount from '../DepositAmount'
import WithdrawAmount from '../WithdrawAmount'

const RootRouter = () => {
  return (
	  <Router>
    <Switch>
    <Route
				exact
				path="/DepositAmount"
				component={DepositAmount}
			/>
    <Route
				exact
				path="/WithdrawAmount"
				component={WithdrawAmount}
			/>
    <Route
				exact
				path="/TotalAmount"
				component={TotalAmount}
			/>

			<Route
				exact
				path="/error"
				component={() => (
					<Error
						errorMessage={"Oops..Something went wrong"}
					/>
				)}
			/>
      
    </Switch>
	</Router>
  )
}

export default RootRouter;
