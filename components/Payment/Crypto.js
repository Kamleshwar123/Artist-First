import React, { useState, useEffect } from "react";
import { Modal, Typography } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SnackBar from "../Common/SnackBar";
import { InputBase } from "@mui/material";
import BuyNFT from "../Buttons/BuyNFT";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
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

  flexCenter: {
    width: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px auto",
  },
  gradText: {
    background: "-webkit-linear-gradient(#B237F6,#E94177)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
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
    width: "400px",
  },
  "& .MuiSvgIcon-root": {
    color: "white",
  },
}));
export default function Crypto(props) {
  const classes = useStyles();
  const str = `data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAIAAAAHjs1qAAANCUlEQVR4Xu3SUa4jNxBD0UF2lp1nZ8kCrgxc0Cp1xyJwvgYk1fNcf\/795++qS\/zhP1X9qp57XaTnXhfpuddFeu51kZ57XaTnXhfpuddFeu51kZ57XaTnXhfpuddFeu51kZ57XaTnXhfpuddFeu51kZ57XaTnXhfpuddFeu51kZ57XaTnXhfpuddFeu51kZ57XaTnXhfpuddFeu51kZ57XaTnXhfpuddFeu51kZ57XaTnXhfpuddFeu51kQfO\/c+fvx7E7zHMjskYZocZY9fOLvyeaT13xeyYjGF2mDF27ezC75nWc1fMjskYZocZY9fOLvyeaT13xeyYjGF2mDF27ezC75nWc1fMjskYZocZY9fOLvyeaT13xeyYjGF2mDF27ezC75n2inNnZhfz1q5MhstkWswYu3aMk2990nPflslwmUyLGWPXjnHyrU967tsyGS6TaTFj7NoxTr71Sc99WybDZTItZoxdO8bJtz7puW\/LZLhMpsWMsWvHOPnWJz33bZkMl8m0mDF27Rgn3\/rkpefOjGF2mNnFvGUyu5i3soxhdpiZ1nPfxrxlMruYt7KMYXaYmdZz38a8ZTK7mLeyjGF2mJnWc9\/GvGUyu5i3soxhdpiZ1nPfxrxlMruYt7KMYXaYmdZz38a8ZTK7mLeyjGF2mJnWc19kjGzHtEyG2DLMDjOG2WFmWs99kTGyHdMyGWLLMDvMGGaHmWk990XGyHZMy2SILcPsMGOYHWam9dwXGSPbMS2TIbYMs8OMYXaYmdZzX2SMbMe0TIbYMswOM4bZYWZaz32RMbId0zIZYsswO8wYZoeZaT33haxlmGWTIbbItEzGMDvMTOu5L2QtwyybDLFFpmUyhtlhZlrPfSFrGWbZZIgtMi2TMcwOM9N67gtZyzDLJkNskWmZjGF2mJnWc1\/IWoZZNhlii0zLZAyzw8y0nvtC1jLMsskQW2RaJmOYHWamvfTcdzFvMUO7WmRaJpOZW6aTb33Sc19kaFeLTMtkMnPLdPKtT3ruiwztapFpmUxmbplOvvVJz32RoV0tMi2Tycwt08m3Pum5LzK0q0WmZTKZuWU6+dYnPfdFhna1yLRMJjO3TCff+uQV536S+Z6bMyfxe6b13Bffc3PmJH7PtJ774ntuzpzE75nWc198z82Zk\/g903rui++5OXMSv2daz33xPTdnTuL3THvg3N+PP4zBHTItk6GsdZue+wJPx+AOmZbJUNa6Tc99gadjcIdMy2Qoa92m577A0zG4Q6ZlMpS1btNzX+DpGNwh0zIZylq36bkv8HQM7pBpmQxlrds8cO78YXaZe8ss78oY3CG2yLTmMuf13BWzvCtjcIfYItOay5zXc1fM8q6MwR1ii0xrLnNez10xy7syBneILTKtucx5PXfFLO\/KGNwhtsi05jLn9dwVs7wrY3CH2CLTmsuc94pzzzK7mLeyjMEdgzvEFpmWyRi7dr7Rc1dvZRmDOwZ3iC0yLZMxdu18o+eu3soyBncM7hBbZFomY+za+UbPXb2VZQzuGNwhtsi0TMbYtfONnrt6K8sY3DG4Q2yRaZmMsWvnGz139VaWMbhjcIfYItMyGWPXzjceOHfK\/hBs7WLeYibDZWLL4I6R7ZgWM+f13BfMW8xkuExsGdwxsh3TYua8nvuCeYuZDJeJLYM7RrZjWsyc13NfMG8xk+EysWVwx8h2TIuZ83ruC+YtZjJcJrYM7hjZjmkxc17PfcG8xUyGy8SWwR0j2zEtZs574NzNH4IZgzvGyR1mjGzHtEzGMDvMnNdzX7zFjGF2mDGyHdMyGcPsMHNez33xFjOG2WHGyHZMy2QMs8PMeT33xVvMGGaHGSPbMS2TMcwOM+f13BdvMWOYHWaMbMe0TMYwO8yc13NfvMWMYXaYMbId0zIZw+wwc94D50780xBbxBZlLcp2shZxh9gitjJzy3v13FWLsp2sRdwhtoitzNzyXj131aJsJ2sRd4gtYiszt7xXz121KNvJWsQdYovYyswt79VzVy3KdrIWcYfYIrYyc8t79dxVi7KdrEXcIbaIrczc8l4vPXdmaFeL2Npl11vcIbaIrUy2zNa0nvsCW7vseos7xBaxlcmW2ZrWc19ga5ddb3GH2CK2MtkyW9N67gts7bLrLe4QW8RWJltma1rPfYGtXXa9xR1ii9jKZMtsTeu5L7C1y663uENsEVuZbJmtaQ+cO\/\/bGS4TW5lsmS1iK5Mts\/Xbeu5KtswWsZXJltn6bT13JVtmi9jKZMts\/baeu5Its0VsZbJltn5bz13JltkitjLZMlu\/reeuZMtsEVuZbJmt3\/aKc5\/LzMleZ8swO8zswrfItJg5r+ceyl5nyzA7zOzCt8i0mDmv5x7KXmfLMDvM7MK3yLSYOa\/nHspeZ8swO8zswrfItJg5r+ceyl5nyzA7zOzCt8i0mDmv5x7KXmfLMDvM7MK3yLSYOe+l525wJ7Nr2eyYjMEdw+yYDLFlcGdaz33xOjOG2TEZgzuG2TEZYsvgzrSe++J1ZgyzYzIGdwyzYzLElsGdaT33xevMGGbHZAzuGGbHZIgtgzvTeu6L15kxzI7JGNwxzI7JEFsGd6b13BevM2OYHZMxuGOYHZMhtgzuTPsfnzuZZZPJcNngjsEdw+xkGWPXzjd67otMhssGdwzuGGYnyxi7dr7Rc19kMlw2uGNwxzA7WcbYtfONnvsik+GywR2DO4bZyTLGrp1v9NwXmQyXDe4Y3DHMTpYxdu18o+e+yGS4bHDH4I5hdrKMsWvnGy89d2aILTrZymRvmRYzRrbD1jv13BeyViZ7y7SYMbIdtt6p576QtTLZW6bFjJHtsPVOPfeFrJXJ3jItZoxsh6136rkvZK1M9pZpMWNkO2y9U899IWtlsrdMixkj22HrnV567s\/KvtC0TGaXk2\/Rs69\/0nNfyL7QtExml5Nv0bOvf9JzX8i+0LRMZpeTb9Gzr3\/Sc1\/IvtC0TGaXk2\/Rs69\/0nNfyL7QtExml5Nv0bOvf9JzX8i+0LRMZpeTb9Gzr3\/y0nNnhtgitgzuGNwh0zIZylon8QvP67kvcMfgDpmWyVDWOolfeF7PfYE7BnfItEyGstZJ\/MLzeu4L3DG4Q6ZlMpS1TuIXntdzX+COwR0yLZOhrHUSv\/C8nvsCdwzukGmZDGWtk\/iF5z1w7m\/DH4bYyphlkzF+decbPffFz0BsZcyyyRi\/uvONnvviZyC2MmbZZIxf3flGz33xMxBbGbNsMsav7nyj5774GYitjFk2GeNXd77Rc1\/8DMRWxiybjPGrO9944Nz53z7JfI\/JZLLlrEVmx2TItJg5r+e++B6TyWTLWYvMjsmQaTFzXs998T0mk8mWsxaZHZMh02LmvJ774ntMJpMtZy0yOyZDpsXMeT33xfeYTCZbzlpkdkyGTIuZ83rui+8xmUy2nLXI7JgMmRYz573i3JnZZe6tXctzO8SWke2wRWxN67mHdi3P7RBbRrbDFrE1rece2rU8t0NsGdkOW8TWtJ57aNfy3A6xZWQ7bBFb03ruoV3LczvElpHtsEVsTeu5h3Ytz+0QW0a2wxaxNe2l586MYXayDGUt4k5mbnkOv3laz11lKGsRdzJzy3P4zdN67ipDWYu4k5lbnsNvntZzVxnKWsSdzNzyHH7ztJ67ylDWIu5k5pbn8Jun9dxVhrIWcScztzyH3zyt577IGNkOW4bZMRnD7GQZYmtaz32RMbIdtgyzYzKG2ckyxNa0nvsiY2Q7bBlmx2QMs5NliK1pPfdFxsh22DLMjskYZifLEFvTeu6LjJHtsGWYHZMxzE6WIbam9dwXGSPbYcswOyZjmJ0sQ2xN67mrTIbLmWx5rsUMZa1pPXeVyXA5ky3PtZihrDWt564yGS5nsuW5FjOUtab13FUmw+VMtjzXYoay1rSeu8pkuJzJludazFDWmtZzV5kMlzPZ8lyLGcpa01567ruYt5ghtogtOtki7hBbxBZlrWk990WG2CK26GSLuENsEVuUtab13BcZYovYopMt4g6xRWxR1prWc19kiC1ii062iDvEFrFFWWtaz32RIbaILTrZIu4QW8QWZa1pPfdFhtgituhki7hDbBFblLWmveLcT8q+hy0yLWbItJgxsh22DO68Qc9dfQ9bZFrMkGkxY2Q7bBnceYOeu\/oetsi0mCHTYsbIdtgyuPMGPXf1PWyRaTFDpsWMke2wZXDnDXru6nvYItNihkyLGSPbYcvgzhv03NX3sEWmxQyZFjNGtsOWwZ03eODcq57Sc6+L9NzrIj33ukjPvS7Sc6+L9NzrIj33ukjPvS7Sc6+L9NzrIj33ukjPvS7Sc6+L9NzrIj33ukjPvS7Sc6+L9NzrIj33ukjPvS7Sc6+L9NzrIj33ukjPvS7Sc6+L9NzrIj33ukjPvS7Sc6+L9NzrIj33ukjPvS7Sc6+L9NzrIj33ukjPvS7Sc6+L\/Ad8sBqF7UtUQwAAAABJRU5ErkJggg==`;
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
  const [selected, setSelected] = React.useState(1);
  const [qrRaw, setQrRaw] = React.useState("");

  const handleChange = (event) => {
    fetch("/pay/qrcode?address=" + event.target.value.split(/-(.+)/)[1])
      .then((response) => response.text())
      .then((result) => setQrRaw(result))
      .catch((error) => console.log("error", error));
    setSelected(event.target.value);
  };
  var keys = [];
  for (var key in props?.crypoData?.data?.addresses) {
    if (props?.crypoData?.data?.addresses.hasOwnProperty(key)) {
      keys.push({
        coin: key,
        address: props?.crypoData?.data?.addresses[key],
      });
    }
  }
  useEffect(() => {
    if (keys.length > 0 && qrRaw == "") {
      setSelected(`0-${keys[0]["address"]}`);
      fetch("/pay/qrcode?address=" + keys[0]["address"])
        .then((response) => response.text())
        .then((result) => setQrRaw(result))
        .catch((error) => console.log("error", error));
    }
  }, [keys]);

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
              }}
              className={classes.flex}
            >
              <Typography variant="h5">Add Funds</Typography>
              <Typography onClick={() => props.onClose()} variant="body1">
                X
              </Typography>
            </div>
            <div
              style={{
                padding: "10px 10px 0px 0px",
              }}
              className={classes.flex}
            >
              <Typography variant="subtitle1">Choose Asset</Typography>
            </div>
            <div
              style={{
                padding: "10px 0px",
              }}
              className={classes.flex}
            >
              <FormControl variant="standard">
                <Select
                  labelId="select-country-label"
                  id="select-country-select"
                  value={selected}
                  onChange={handleChange}
                  input={<BootstrapInput />}
                >
                  {keys.map((obj, index) => {
                    return (
                      <MenuItem key={index} value={`${index}-${obj.address}`}>
                        {obj.coin}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <div className={classes.flexCenter}>
              <Typography variant="subtitle1">
                {`${""}USDT and Matic Address`} 
                {/* //dynamic */}
              </Typography>
              <img src={`data:image\/png;base64,${qrRaw}`} />
            </div>
            <div
              style={{
                padding: "0px 0px",
              }}
              className={classes.flex}
            >
              <Typography variant="body1">
                Send only USDT to this address
              </Typography>
            </div>
            <div
              style={{
                padding: "0px 0px",
              }}
              className={classes.flex}
            >
              <Typography variant="body2">
                Sending Coin or token other than USDT to this address may result
                in loss of your deposit.
              </Typography>
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
              <BuyNFT text={"Done!"} />
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
