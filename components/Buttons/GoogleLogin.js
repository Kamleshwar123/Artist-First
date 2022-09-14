import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import GoogleLogoG from "../../Icons/GoogleLogo";
import googleHelper from "../Layout/util/googleHelper";
import GoogleLogin from "react-google-login";
const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "500",
    fontSize: "16",
    lineHeight: "30px",
    textTransform: "capitalize",
    borderRadius: "8",
    boxShadow: "none",
    border: "1px solid",
    borderColor: "#F3938A",
    color: "#EA4335",
    padding: "8px 16px",
    outline: "none",
    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12",
      lineHeight: "16px",
      padding: "8px",
    },
  },
  startIcon: {
    [theme.breakpoints.down("sm")]: {
      marginRight: 4,
    },
  },
}));

export default function GoogleLogin1(props) {
  const handleFailure = (e) => {
    alert("failure" + e);

    console.log("failure");
    console.log(e);
  };

  const handleSuccess = (response) => {
    const log = googleHelper({
      id_token: response.tokenId ? response.tokenId : "",
      access_token: response.accessToken
    });
    if (log) {
      setTimeout(props.handleClose, 1000);
    }
  };

  const { text, fullWidth, onClick } = props;
  const classes = useStyles(props);
  // console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);
  return (
    <GoogleLogin
      clientId="601621850906-1nn03iov4d6uin8g5lpvgt2ujccmmipb.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      // cookiePolicy={"single_host_origin"}
      render={(renderProps) => (
        <Button
          varaint="contained"
          fullWidth={fullWidth || false}
          startIcon={<GoogleLogoG />}
          className={`${classes.root} ${props.className}`}
          classes={{ startIcon: classes.startIcon }}
          onClick={() => {
            renderProps.onClick();
          }}
          disabled={renderProps.disabled}
        >
          {text}
        </Button>
      )}
    />
  );
}
