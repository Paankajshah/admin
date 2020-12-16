import React, { useEffect, useState } from "react";
import { Container, RoutesPages } from "./styles";
import ErrorSnackbar from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";

function Layout({ children }) {
  const [showSnackbar, setShowSnackbar] = useState(null);

  const hideSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(null);
  };

  useEffect(() => {
    if (/* messsage from store */ true) {
      setShowSnackbar(
        <Snackbar
          onClose={hideSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={/* requestError.value */ true}
        >
          <ErrorSnackbar
            elevation={6}
            variant="filled"
            severity="error"
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={hideSnackbar}
                >
                  <CloseIcon fontSize="large" />
                </IconButton>
              </React.Fragment>
            }
          >
           snackbar {/* {requestError.msg} */}
          </ErrorSnackbar>
        </Snackbar>
      );
    }
  }, [/* requestError */]);

  return (
    <Container>
      {showSnackbar}
      {/* <Navigation /> */}
      <div style={{ flex: "1" }} className="rightContent">
        {/* <Appbar /> */}
        <RoutesPages>{children}</RoutesPages>
      </div>
    </Container>
  );
}

export default Layout;
