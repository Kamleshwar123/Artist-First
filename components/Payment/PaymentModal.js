import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Modal, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SnackBar from "../Common/SnackBar";
import { InputBase } from "@mui/material";
import AddNow from "../Buttons/AddNow";
import BuyNow from "../Buttons/BuyNow";
import BuyNFT from "../Buttons/BuyNFT";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    background: "#242033",
    borderRadius: "10px",
    color: "white",
    minHeight: "50%",
  },
  paper: {
    width: "95%",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    padding: "10px",
  },
  flex: {
    width: "95%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  select: {
    border: "white",
    color: "white",
    "&:after": {
      border: "white",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
  icon: {
    fill: "white",
  },
  payemntMethod: {
    border: "1px solid #FFFFFF",
    borderRadius: "8px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    minHeight: "50px",
    alignItems: "center",
    padding: "10px",
  },
  ellipse: {
    height: "50px",
    width: "50px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    background: "#2D293A",
    borderRadius: "50%",
  },
  active: {
    borderRadius: "50%",
    height: "20px",
    width: "20px",
    border: "5px solid transparent",
    background: "linear-gradient(180deg,#B237F6,#E94177) border-box",
    WebkitMask:
      "linear-gradient(#B237F6 0 0) padding-box, linear-gradient(#E94177 0 0)",
    WebkitMaskComposite: "xor",
  },
  inActive: {
    borderRadius: "50%",
    height: "20px",
    width: "20px",
    border: "2px solid #fff",
  },
  gradText: {
    background: "-webkit-linear-gradient(#B237F6,#E94177)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));

const TextField1 = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    backgroundColor: "transparent",
    border: "1px solid #FFF",
    fontSize: 16,
    width: "80px",
    padding: "10px 12px",
    color: "#fff",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      borderColor: "#fff",
    },
  },
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "transparent",
    border: "1px solid white",
    fontSize: 14,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    color: "white",
  },
  "& .MuiSvgIcon-root": {
    color: "white",
  },
}));
export default function PaymentModal(props) {
  const classes = useStyles();
  const handleClose = () => {
    props.onClose();
  };
  const [snackbar, setSnackbar] = useState({
    show: false,
    status: "",
    message: "",
  });
  const toggleSnackbar = (value) => {
    setSnackbar(value);
  };
  const [age, setAge] = React.useState(1);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [isRazorPay, setIsRazorPay] = useState(true);
  const [amount, setAmount] = useState("");
  const balance = 250;
  return (
    <>
      <Modal
        open={props.open}
        onClose={() => props.onClose()}
        aria-labelledby="Payment Modal"
        aria-describedby="Accepts payment from user"
      >
        <div className={classes.root}>
          <div className={classes.paper}>
            <div
              style={{
                padding: "20px 0px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
              }}
              className={classes.flex}
            >
              <Typography variant="h5">Add Funds</Typography>
              <Typography variant="body1">Your Balance - ${balance}</Typography>
            </div>
            <div
              style={{
                padding: "20px 0px",
              }}
              className={classes.flex}
            >
              <Typography variant="subtitle1">Payment Method</Typography>
              <FormControl variant="standard">
                <Select
                  labelId="select-country-label"
                  id="select-country-select"
                  value={age}
                  onChange={handleChange}
                  input={<BootstrapInput />}
                >
                  <MenuItem value={1}>India</MenuItem>
                  <MenuItem value={2}>Rest of the world</MenuItem>
                </Select>
              </FormControl>
            </div>
            {age == 1 && (
              <div
                style={{
                  padding: "10px 0px",
                  cursor: "pointer",
                }}
                className={classes.flex}
                onClick={() => setIsRazorPay(true)}
              >
                <div className={classes.payemntMethod}>
                  <div className={classes.ellipse}>
                    <img
                      style={{ objectFit: "contain", margin: "auto" }}
                      src="/images/payment/credit.png"
                    />
                  </div>
                  <Typography variant="body1">
                    Debit card, Credit card, UPI, or NetBanking
                  </Typography>
                  <div
                    className={isRazorPay ? classes.active : classes.inActive}
                  ></div>
                </div>
              </div>
            )}
            <div
              style={{
                padding: "10px 0px",
                cursor: "pointer",
              }}
              className={classes.flex}
              onClick={() => setIsRazorPay(false)}
            >
              <div className={classes.payemntMethod}>
                <div className={classes.ellipse}>
                  <img
                    style={{ objectFit: "contain", margin: "auto" }}
                    src="/images/payment/btc.png"
                  />
                </div>
                <Typography variant="body1">
                  BTC, ETH, USD on Mainnet{" "}
                </Typography>
                <div
                  className={isRazorPay ? classes.inActive : classes.active}
                ></div>
              </div>
            </div>
            <div
              style={{
                padding: "5px 0px",
              }}
              className={classes.flex}
            >
              <Typography variant="subtitle1">
                Add Fund to your account
              </Typography>
            </div>
            <div
              style={{
                padding: "10px 0px",
              }}
              className={classes.flex}
            >
              <Typography variant="subtitle1">Enter Amount</Typography>
              <TextField1
                id="outlined-basic"
                label="Amount"
                variant="outlined"
                value={amount}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setAmount(value);
                }}
              />
            </div>
            <div
              style={{
                padding: "5px 0px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
              }}
              className={classes.flex}
            >
              <Typography variant="subtitle1">Service Fee</Typography>
              <Typography variant="subtitle1">$ 0</Typography>
            </div>
            <div
              style={{
                padding: "10px 0px",
              }}
              className={classes.flex}
            >
              <Typography variant="body1">Total</Typography>
              <Typography variant="h6">$ {amount}</Typography>
            </div>
            <div
              style={{
                padding: "10px 0px",
              }}
              className={classes.flex}
            >
              <div
                style={{
                  margin: "0px 10px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={props.onClose}
              >
                <KeyboardBackspaceIcon />
                <Typography
                  ml={1}
                  mr={1}
                  className={classes.gradText}
                  variant="h6"
                >
                  Back
                </Typography>
              </div>
              {balance <= amount ? (
                <AddNow
                  isRazorPay={isRazorPay}
                  amount={amount}
                  text={"Add Funds"}
                />
              ) : (
                <BuyNFT text={"Buy Now"} />
              )}
            </div>
          </div>
        </div>
      </Modal>
      {snackbar.show ? (
        <SnackBar {...snackbar} onClose={toggleSnackbar} />
      ) : null}
    </>
  );
}
