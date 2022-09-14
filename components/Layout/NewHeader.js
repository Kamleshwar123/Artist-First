import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import { makeStyles } from "@mui/styles";
import EarlyAccess from "./../Buttons/EarlyAccess";
import Logo from "../../Icons/Logo";
import Login from "./../Buttons/Login";
import LoginScreen from "../Layout/LoginScreen";
import auth from "../Layout/util/auth";
import logout from "../Layout/util/logout";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Header from "./../../components/Layout/Header";
import { useMediaQuery } from "@mui/material";
import CommunityModal from "./communityModal";
import eventBus from "../../util/eventBus";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  stack: {
    zIndex: 59,
    color: "white",
    fontSize: "80px",
    marginTop: "140px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundImage: "url('/images/home/patch-old.png')",
    padding: "50px",
    paddingBottom: "90px",
    marginBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      width: "95%",
      textAlign: "center",
      marginBottom: "auto",
      padding: "0px",
    },
  },
  tagLine: {
    color: "white",
    fontSize: "4.8rem",
    lineHeight: "5.5rem",
    maxWidth: "80%",
    textAlign: "center",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "98%",
      fontSize: "26px",
      lineHeight: "35px",
      maxWidth: "95%",
      marginTop: "15px",
      textAlign: "left",
    },
  },
  subTitle: {
    color: "#E14084",
    fontSize: "3.5rem",
    textAlign: "center",
    margin: "auto",
    width: "100%",
    fontWeight: "normal",
    marginTop: "20px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      color: "white",
      fontSize: "22px",
      textAlign: "left",
      margin: "auto",
      fontWeight: "normal",
      marginTop: "10px",
      marginBottom: "10px",
      lineHeight: "28px",
      maxWidth: "95%",
    },
  },
  logoImg: {
    position: "absolute",
    width: "200px",
    height: "auto",
    left: "30px",
    top: "30px",
  },
  login: {
    position: "absolute",
    // width: "200px",
    // height: "auto",
    right: "30px",
    top: "30px",
    color: "white",
  },
  menuButton: {
    margin:"0px 10px"
  },
  img: {
    objectFit: "cover",
    display: "flex",
    width: "100%",
    height: "auto",
    position: "absolute",
  },
}));
export default function NewHeader() {
  const classes = useStyles();
  const router =useRouter();
  const [callBackName, setCallBackName] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
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

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const r = auth();
  return (
    <div className={classes.root}>
      {isMobile ? (
        <Header borderBottom="none" color="#110c2c" />
      ) : (
        <div>
          <Logo className={classes.logoImg} />
          {callBackName}
          {r.userName ? (
            <>
              <Button
                className={classes.login}
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickMenu}
              >
                {r.userName}
              </Button>
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
                <MenuItem
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
            <div className={classes.login}>
            <Login onClick={()=>{handleOpen2();router.push("/community")}} className={classes.menuButton}>
             Community
           </Login>
            <Login onClick={handleOpen} className={classes.menuButton}>
              Login
            </Login>
           </div>
          )}
        </div>
      )}
      <LoginScreen open={open} onClose={handleClose} callBackName={callBackName}/>
      <CommunityModal open={open2} onClose={handleClose2} />
    </div>
  );
}
