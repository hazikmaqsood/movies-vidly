import React from "react";
import Button from "@material-ui/core/Button";
import Layout from "../layout/Layout";
const Tableform = (props) => {
  const { match, history } = props;
  const handleSave = () => {
    history.push("/movie");
  };

  return (
    <Layout>
      <h1>Table Form</h1>
      <h3>{match.params.id} </h3>
      <Button variant="contained" color="primary" onClick={handleSave}>
        SAVE ME
      </Button>
    </Layout>
  );
};

export default Tableform;
