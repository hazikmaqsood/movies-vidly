import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Layout from "../layout/Layout";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  typo: {
    margin: "25px 0px",
    textAlign: "center",
  },
  form: {
    maxWidth: "500px",
    margin: "auto",
  },
});

const Login = () => {
  const classes = useStyle();
  const [account, setAccount] = useState({ username: "", password: "" });
  const handleInputChange = (e) => {
    const login = { ...account };
    login[e.target.name] = e.target.value;
    setAccount(login);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(account);
  };

  return (
    <Layout>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography className={classes.typo} variant="h4" component="h5">
          Login Authentication
        </Typography>
        <TextField
          
          fullWidth
          margin="normal"
          id="outlined-basic"
          label="Username"
          variant="outlined"
          name="username"
          onChange={handleInputChange}
          // error={text === ""}
          // helperText={text === "" ? 'Empty!' : ' '}
        />
        <TextField
          fullWidth
          margin="normal"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          onChange={handleInputChange}
          
        />

        <Button fullWidth variant="contained" color="secondary" type="submit">
          Submit
        </Button>
      </form>
    </Layout>
  );
};

export default Login;
