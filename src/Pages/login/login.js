import React, { useState, useEffect } from "react";
import { Container, LoginBox, Logo , StyledAvatar} from "./styles";
import { Typography, IconButton, Button, Divider } from "@material-ui/core";
import { StyledTextField } from "../../Components/UI/input";
// import logo from "../../Assets/logo.png";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import Loader from "../../Components/UI/Loader";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../../Store/Actions/AuthAction/authActions";
import HelperText from "../../Components/UI/HelperText";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState({ value: "", error: false, errMsg: "" });
  const [password, setPassword] = useState({
    value: "",
    error: false,
    errMsg: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { loginLoader } = useSelector((state) => state.authReducer);
  const { authError } = useSelector((state) => state.errorReducer);

  const handlePasswordChange = (e) => {
    setPassword({
      ...password,
      value: e.target.value,
      error: false,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginHandler = () => {
    let emailError = false;
    let passwordError = false;
    const emailRegx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegx.test(email.value)) {
      emailError = false;
    } else {
      emailError = true;
    }
    if (password.value.length < 5) {
      passwordError = true;
    }
    if (passwordError || emailError) {
      setEmail({
        ...email,
        error: emailError,
        errMsg: "Enter a valid email address",
      });
      setPassword({
        ...password,
        error: passwordError,
        errMsg: "Password must be atleast 5 character.",
      });
    } else {
      const data = {
        email: email.value,
        password: password.value,
      };
      dispatch(authenticate(data));
    }
  };

  useEffect(() => {
    console.log("ok");
    if (authError.value) {
      setPassword((prevState) => {
        return {
          ...prevState,
          error: true,
          errMsg: authError.msg,
        };
      });
      setEmail((prevState) => {
        return {
          ...prevState,
          error: true,
          errMsg: "",
        };
      });
    }
  }, [authError.value, authError.msg, setPassword]);

  return (
    <Container>
      <LoginBox elevation={24}>
        {/* {loginLoader && <Loader />}  */}
        <Logo elevation={0}>
          <StyledAvatar>
            <LockOutlinedIcon />
          </StyledAvatar>
        </Logo>
      </LoginBox>
      <LoginBox elevation={24}>
        {/* {loginLoader && <Loader />}  */}
        <Logo elevation={0}>
          <StyledAvatar>
            <LockOutlinedIcon />
          </StyledAvatar>
        </Logo>
        <Typography
          variant="body1"
          color="textPrimary"
          align="center"
          style={{ marginBottom: "0.7rem" }}
        >
          Bulk SMS System
        </Typography>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          style={{ marginBottom: "1.5rem" }}
        >
          Use your credential to login.
        </Typography>
        <StyledTextField
          color="primary"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
          value={email.value}
          autoFocus
          disabled={loginLoader}
          style={{ marginBottom: "1.8rem" }}
          onChange={(e) =>
            setEmail({ ...email, value: e.target.value, error: false })
          }
          error={email.error}
          helperText={email.error ? <HelperText msg={email.errMsg} /> : ""}
        />
        <div className="passwordContainer">
          <StyledTextField
            color="primary"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            disabled={loginLoader}
            value={password.value}
            onChange={handlePasswordChange}
            type={showPassword ? "text" : "password"}
            style={{ marginBottom: "0.9rem" }}
            error={password.error}
            helperText={
              password.error ? <HelperText msg={password.errMsg} /> : ""
            }
          />
          <IconButton
            className="show-hide-btn"
            disabled={loginLoader}
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </div>
        <div
          className="flexCon"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Button
            color="primary"
            size="medium"
            disabled={loginLoader}
            style={{
              textTransform: "capitalize",
              marginBottom: "0.3rem",
            }}
          >
            Forgot Password?
          </Button>
          <div className="linkButton">
            <Link
              color="primary"
              to="/register"
              style={{
                textTransform: "capitalize",
                marginBottom: "0.3rem",
                textDecoration: "none",
                color: "rgb(0,0,255,0.8)",
                
              }}
            >
           sign up
            </Link>
          </div>
        </div>
        <Button
          color="primary"
          size="small"
          variant="contained"
          disableElevation
          disabled={loginLoader}
          style={{
            alignSelf: "flex-end",
            textTransform: "capitalize",
            marginBottom: "1.3rem",
          }}
          onClick={loginHandler}
        >
          Submit
        </Button>
        <div className="btm-actions">
          <Typography variant="caption" color="textSecondary">
            Terms
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            style={{ background: "rgba(0,0,0,0.3)", margin: "0px 0.6rem" }}
          />
          <Typography variant="caption" color="textSecondary">
            Support
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            style={{ background: "rgba(0,0,0,0.3)", margin: "0px 0.6rem" }}
          />
          <Typography variant="caption" color="textSecondary">
            Website
          </Typography>
        </div>
      </LoginBox>
    </Container>
  );
}

export default Login;
