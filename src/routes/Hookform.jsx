import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Layout from "../layout/Layout";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
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

const schema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(4).required(),
});

const Hookform = () => {
  const classes = useStyle();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <Layout>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={classes.typo}
          fullWidth
          name="username"
          margin="normal"
          id="standard-basic"
          label="Username"
          inputRef={register}
          error={errors.username && true}
          helperText={errors.username?.message}
        />

        <TextField
          className={classes.typo}
          fullWidth
          name="password"
          margin="normal"
          id="standard-password-input"
          label="Password"
          type="password"
          inputRef={register}
          error={errors.password && true}
          helperText={errors.password?.message}
        />
        <Button fullWidth variant="contained" color="secondary" type="submit">
          LOGIN
        </Button>
      </form>
    </Layout>
  );
};

export default Hookform;
