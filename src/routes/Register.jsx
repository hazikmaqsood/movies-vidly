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
  name: yup.string().max(20).required(),
  email: yup.string().email().required(),
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
          name="name"
          margin="normal"
          id="standard-basic"
          label="Name"
          inputRef={register}
          error={errors.name && true}
          helperText={errors.name?.message}
        />

        <TextField
          className={classes.typo}
          fullWidth
          name="email"
          margin="normal"
          id="standard-input"
          label="Email"
          inputRef={register}
          error={errors.email && true}
          helperText={errors.email?.message}
        />
        <Button fullWidth variant="contained" color="primary" type="submit">
          SUBMIT
        </Button>
      </form>
    </Layout>
  );
};

export default Hookform;
