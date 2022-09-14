import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "@mui/material";
import Logo from "../../Icons/Logo";
import SongTiger from "../../Icons/SongTiger";
import MenuIcon from "@mui/icons-material/Menu";
import LoginScreen from "./LoginScreen";
import auth from "./util/auth";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import logout from "../Layout/util/logout";
import eventBus from "../../util/eventBus";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#0C091B",
    backgroundImage: "url('/images/bg.png')",
    height: "fit-content",
    width: "100%",
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    justifyContent: "flex-start",
    color: "white",
    borderBottom: "0.5px solid #FFFFFF",
    alignItems: "center",
    padding: "5px",
    position: "relative",
    overflow: "hidden",
  },
  logoImg: {
    width: "180px",
    height: "auto",
    margin: "26px 24px",
    [theme.breakpoints.down("sm")]: {
      margin: "15px",
    },
  },
  hamburger: {
    marginLeft: "5px",
  },
  login: {
    position: "absolute",
    // width: "200px",
    // height: "auto",
    right: "10px",
    // top: "5px",
    color: "white",
  },
}));

export default function Header({ color, borderBottom }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [callBackName, setCallBackName] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    eventBus.on("openLoginModal", (cb) => {
      if (!open) {
        setCallBackName(cb.function_name);
        handleOpen();
      }
    });
    return () => {
      eventBus.remove("openLoginModal");
    };
  }, []);
  const r = auth();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <header
      className={classes.root}
      style={{
        backgroundImage: color ? "none" : "url('/images/bg.png')",
        background: color,
        borderBottom: borderBottom,
      }}
    >
      {isMobile && <MenuIcon className={classes.hamburger} />}
      <Logo className={classes.logoImg} />
      {callBackName}
      {r.userName ? (
        <>
          <p
            className={classes.login}
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickMenu}
          >
            <AccountCircle />
          </p>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open1}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem style={{ fontSize: "14px" }}>{r.userName}</MenuItem>
            <MenuItem
              style={{ fontSize: "14px" }}
              onClick={() => {
                handleCloseMenu();
                logout();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <>
        <p onClick={handleOpen} className={classes.login}>
          Login
        </p>
        </>
      )}

      <LoginScreen
        open={open}
        callBackName={callBackName}
        onClose={handleClose}
      />
    </header>
  );
}
