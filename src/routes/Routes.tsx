import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"


function Routes() {
  return (
    <BrowserRouter>
    <Switch>
        <Route
        path="/HomePage"
        Component={HomePage} 
        />
        <Route
        path="*"
        Component={() => <Navigate to="HomePage"/>} 
        />
    </Switch>
    </BrowserRouter>
  )
}

export default Routes