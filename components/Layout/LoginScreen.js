import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import cookie from "js-cookie";
import login from "./util/login";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import SnackBar from "../Common/SnackBar";
import GoogleLogin from "../Buttons/GoogleLogin";
import { makeStyles } from "@mui/styles";
import Logo from "../../Icons/Logo";
import Gradient from "../Buttons/Gradient";
import { withStyles } from "@mui/styles";
import eventBus from "../../util/eventBus";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  background: "#242033",
  borderRadius: "10px",
  color: "white",
  minHeight: "50%",
  boxShadow: 24,
  p: 4,
};

const TextField3 = withStyles({
  root: {
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      color: "white",
      borderRadius: "12px",

      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: "85%",
    margin: "auto",
  },
  header: {
    maxWidth: "100%",
    overflow: "hidden",
    margin: "0 5%",
    width: "fit-content",
  },
  input: {
    margin: "2px",
    color: "white",
  },
  textField: {
    width: "100%",
    display: "flex",
    margin: " 20px auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    borderColor: "white",
  },
  socialLogin: { margin: "5px" },
  logoImg: {
    display: "flex",
    justifyContent: "center",
    width: "180px",
    height: "auto",
    margin: " 20px auto ",
    [theme.breakpoints.down("sm")]: {
      margin: "15px",
    },
  },
  flex: {
    display: "flex",
    margin: "20px auto",
    flexDirection: "column",
  },
}));

export default function LoginScreen(props) {
  //user messages
  const [loginError, setLoginError] = useState("");
  //inputs
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  //errors
  const [usernameError, setusernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const classes = useStyles();
  const handleClose = () => {
    props.onClose();
  };
  const revalidate = () => {
    props.revalidate();
  };

  function handleSubmit(e) {
    e.preventDefault();
    setusernameError("");
    setPasswordError("");
    if (username == "" || password == null) {
      setusernameError("Enter username ID");
      return false;
    }
    if (password == "" || password == null) {
      setPasswordError("Enter Password");
      return false;
    }
    fetch("https://admin.artistfirst.in/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: username,
        password: password,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setusernameError("incorrect email or password.");
          setLoginError("TRY AGAIN");
        }
        if (data && data.jwt) {
          //set cookie
          cookie.set("token", data.jwt, { expires: 2 });
          login(data.jwt, data.user.username, data.user.email, data.user.id);
          toggleSnackbar({
            show: true,
            status: "success",
            message: "Hi, You are logged in  " + data.user.username,
          });
          handleClose();
          if (props.callBackName || props.callBackName !== "") {
            eventBus.dispatch(props.callBackName);
            return;
          }
          // window.open("/nft/gold/jind-mahive");
        }
      })
      .catch((err) => {
        setusernameError(String(err));
      });
  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [snackbar, setSnackbar] = useState({
    show: false,
    status: "",
    message: "",
  });

  const toggleSnackbar = (value) => {
    setSnackbar(value);
  };
  return (
    <>
      <Modal
        open={props.open}
        onClose={() => props.onClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Logo className={classes.logoImg} />

          <div className={classes.paper}>
            <Box
              style={{ cursor: "pointer" }}
              onClick={handleClose}
              top={0}
              right={0}
              position="absolute"
            >
              <CancelPresentationIcon />
            </Box>
            <div className={classes.flex}>
              <Typography variant="h5">Login </Typography>
              <Typography variant="body1">
                Get early access and see your growth!
              </Typography>
            </div>

            <form onSubmit={handleSubmit} validate autoComplete="off">
              <TextField3
                error={usernameError != ""}
                helperText={usernameError}
                id="username"
                label="Email ID / Username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                name="username"
                inputProps={{ className: classes.input }}
                className={classes.textField}
              />
              <TextField3
                className={classes.textField}
                error={passwordError != ""}
                helperText={passwordError}
                value={password}
                id="password"
                label="Password"
                type={values.showPassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                InputProps={{
                  className: classes.input,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {/* <TextField3
                id="refferal"
                label="Enter Invite Code (if any)"
                name="username"
                inputProps={{ className: classes.input }}
                className={classes.textField}
              /> */}
              <Gradient
                type="submit"
                value="Submit"
                variant="contained"
                color="primary"
                text="Login"
              >
                Login
              </Gradient>
              <GoogleLogin
                handleClose={handleClose}
                className={classes.socialLogin}
                text="Google"
              />
              {loginError && <p style={{ color: "red" }}>{loginError}</p>}
            </form>
          </div>
        </Box>
      </Modal>
      {snackbar.show ? (
        <SnackBar {...snackbar} onClose={toggleSnackbar} />
      ) : null}
    </>
  );
}
