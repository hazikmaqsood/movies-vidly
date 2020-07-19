import React from "react";
import Movie from "./component/Movie";
import Customer from "./routes/Customer";
import Error from "./routes/Error";
import Rental from "./routes/Rental";
import Navbar from "./component/Navbar";
import Login from "./routes/Login";
import Tableform from "./routes/Tableform";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      {/* <Movie /> */}
      <Switch>
        <Route path="/movie/:id" component={Tableform} />
        <Route path="/movie" component={Movie} />
        <Route path="/rental" component={Rental} />
        <Route path="/customer" component={Customer} />
        <Route path="/login" component={Login} />
        <Redirect exact from="/" to="/movie" />
        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
