import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Modal } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import cookie from "js-cookie";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import SnackBar from "../Common/SnackBar";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#edf3ff",
  border: "2px solid #4415FF",
  boxShadow: 24,
  p: 4,
};
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  colDiv: {
    maxWidth: "100%",
    width: "100%",
  },
  header: {
    maxWidth: "100%",
    overflow: "hidden",
    margin: "0 5%",
    width: "fit-content",
  },
  input: {
    width: "90%",
    margin: "2px",
  },
}));
export default function RegisterInterest(props) {
  //user messages
  const [loginError, setLoginError] = useState("");
  //inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [remarks, setRemarks] = useState("");
  //errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [remarksError, setRemarksError] = useState("");

  const classes = useStyles();
  const handleClose = () => {
    props.onClose();
  };

  function handleSubmit(e) {
    e.preventDefault();
    setNameError("");
    setPhoneError("");
    setRemarksError("");
    setEmailError("");
    if (name == "" || name == null) {
      setNameError("Enter  Name");
      return false;
    }
    if (email == "" || email == null) {
      setEmailError("Enter Email ID");
      return false;
    }
    if (phone == "" || phone == null) {
      setPhoneError("Enter  Phone");
      return false;
    }
    if (remarks == "" || remarks == null) {
      setRemarksError("Enter Remarks");
      return false;
    }
    fetch("https://admin.artistfirst.in/api/interest-forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjQxNjU1NTg0LCJleHAiOjE2NDQyNDc1ODR9.RnXtsuW043VIKALwDKWQQNEVeztKrGLBgce76PWZ12I",
      },
      body: JSON.stringify({
        data: {
          name: name,
          email: email,
          phone: phone,
          remarks: remarks,
          artist_asset: props.id ? props.id : 1,
        },
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setNameError("We cannot save your information");
        }
        if (data && data.data) {
          toggleSnackbar({
            show: true,
            status: "success",
            message: "Hi, Your message has been saved",
          });
          handleClose();
          //   window.open("/nft/gold/jind-mahive");
        }
      })
      .catch((err) => {
        setNameError(String(err));
        toggleSnackbar({
            show: true,
            status: "error",
            message: "JSON.stringify(data.error)",
          });
        // setLoginError(data.error.message)
      });
  }

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
            <Box style={{ textAlign: "center" }}>
              <h3> Register Now</h3>
            </Box>
            <form onSubmit={handleSubmit} validate autoComplete="off">
              <Box style={{ textAlign: "center" }}>
                <TextField
                  error={nameError != ""}
                  helperText={nameError}
                  className={classes.input}
                  id="name"
                  label="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  name="Name"
                />
                <TextField
                  error={emailError != ""}
                  helperText={emailError}
                  className={classes.input}
                  id="email"
                  label="Enter Email Id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="Email"
                />
                <TextField
                  error={phoneError != ""}
                  helperText={phoneError}
                  className={classes.input}
                  id="phone"
                  label="Enter Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  name="Phone"
                />
                <TextField
                  error={remarksError != ""}
                  helperText={remarksError}
                  className={classes.input}
                  id="remarks"
                  label="Enter Remarks"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  name="Name"
                />
              </Box>
              <br />
              <Button
                type="submit"
                value="Submit"
                variant="contained"
                color="primary"
              >
                Submit Interest
              </Button>
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
