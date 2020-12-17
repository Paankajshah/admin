import React, { useEffect  , useState} from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from "../Pages/login/login";
import Homepage from "./Homepage/homepage";
import Register from "./Register/register";
import Layout from "../Components/layout/layout";
import { useSelector, useDispatch } from "react-redux";
import { authCheck } from "../Store/Actions/AuthAction/authActions";

function App() {
  const dispatch = useDispatch();
    dispatch(authCheck());

  const isAuth = useSelector(state => state.authReducer.token !== null)
  const [condition, setCondition] = useState(true);
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
  useEffect(() => {
    dispatch(authCheck())
    console.log(isAuth)
  }, [dispatch])

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        {isAuth ? (
          <Layout>
            <Switch>
              <Route path="/dashboard" component={Homepage} />
              <Route  path="/register" component={Register} />
              <Redirect to="/dashboard" component={Homepage} />
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
