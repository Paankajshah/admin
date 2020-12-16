import React, { useEffect  , useState} from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from "../Pages/login/login";
import Homepage from "../Pages/Homepage/homepage";
import Layout from "../Components/layout/layout";
function App() {
  const [condition, setCondition] = useState(false);
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#4285F4",
      },
      secondary: {
        main: "#DB4437",
      },
      text: {
        primary: "#5f6368",
        secondary: "#9e9e9e",
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        {condition ? (
          <Layout>
            <Switch>
              <Route path="/dashboard" component={Homepage} />
              
            </Switch>
          </Layout>
        ) : (
          <Switch>
            <Route path="/" component={Login} />
          </Switch>
        )}
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
