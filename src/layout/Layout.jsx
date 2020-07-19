import React from "react";
import Container from "@material-ui/core/Container";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Container maxWidth="md">{children}</Container>
    </div>
  );
};

export default Layout;
