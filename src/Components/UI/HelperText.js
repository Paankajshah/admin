import React from "react";
import styled from "styled-components";
import ErrorIcon from "@material-ui/icons/Error";
import { Typography } from "@material-ui/core";

function HelperText({ msg }) {
  return (
    <Container>
      {msg !== "" && (
        <ErrorIcon style={{ fontSize: "0.97rem", marginRight: "0.3rem" }} />
      )}
      <Typography
        variant="subtitle2"
        color="inherit"
        style={{ fontSize: "0.75rem" }}
        component="span"
      >
        {msg}
      </Typography>
    </Container>
  );
}

export default HelperText;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
