import React, { useState } from "react";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import SnackBar from "../Common/SnackBar";
import auth from "../Layout/util/auth";
import Crypto from "../Payment/Crypto";
const CustomButtonRoot = styled("span")`
  font-family: Inter;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  justify-content: center;
  padding: 6px;
  margin-top: 10px;
  background: linear-gradient(
    90.48deg,
    #e14084 3.73%,
    #3454fa 53.09%,
    #54b5bb 96.58%
  );
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  width: 100%;
  margin: auto;
  text-align: center;

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

export default function AddNow(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [crypoData, setCrypoData] = useState({});
  const handleOpen = () => {
    setOpen(true);
  };
  const onClick = () => {
    if (props.isRazorPay) {
      handlerPAY();
    } else {
      handleCrypto();
    }
  };
  const handleCrypto = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const user = auth();

    var raw = JSON.stringify({
      paymentDetails: {
        principalAmount: props.amount,
        currency: "USD",
      },
      pricingType: "fixed_price",
      customer: {
        customerId: user.id,
        customerName: user.email,
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "manual",
    };

    fetch(
      "/pay/api/wallet/addmoney",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setCrypoData(result);
        handleOpen();
      })
      .catch((error) => console.log("error", error));
  }; 
  const handlerPAY = () => {
    var myHeaders = new Headers();
    myHeaders.append("content-type", "application/json; charset=UTF-8");
    const user = auth();
    var raw = {
      customerName: user.name || "",
      email: user.email || "",
      phoneNo: "1234567898",
      amount: props.amount,
      currency: "INR",
      merchantName: "ArtistFirst",
      purchaseDescription: "Add funds",
    };

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(raw),
      redirect: "manual",
      // mode:"no-cors",
      // redirect: 'follow'
    };

    fetch("/pay/createPayment", requestOptions)
      .then((response) => response.json())
      .then((result) =>
        initiateRazorpay(result.razorPay.razorpayOrderId, props.amount)
      )
      .catch((error) => console.log("error", error));
  };
  const [snackbar, setSnackbar] = useState({
    show: false,
    status: "",
    message: "",
  });

  const toggleSnackbar = (value) => {
    setSnackbar(value);
  };
  const initiateRazorpay = (orderId, amountInPaise) => {
    try {
      const options = {
        key: "rzp_test_jTiWXKSuJjWvO4",
        currency: "INR",
        name: "Artist First",
        // image: "", to be added
        callback_url: false,
        redirect: false,
        handler: razorPayHandler,
        modal: {
          ondismiss: razorPayDismissHandler,
        },
        theme: {
          color: "#ccc",
        },
        order_id: orderId,
        amount: amountInPaise,
        description: "Add funds in wallet",
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.log(error);
      setSnackbar({
        show: true,
        status: "error",
        message: "Something went wrong while making payment",
      });
    }
  };
  const razorPayHandler = async (data) => {
    try {
      if (!data.razorpay_payment_id) {
        setSnackbar({
          show: true,
          status: "error",
          message: "Razorpay payment id not found",
        });
      } else {
        setSnackbar({
          show: true,
          status: "success",
          message: "Payment successfull id- " + data.razorpay_payment_id,
        });
        // let options = {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     razorpay_payment_id: data.razorpay_payment_id,
        //     razorpay_order_id: data.razorpay_order_id
        //   })
        // }
        // let res = await fetch(
        //   `api to add money`,
        //   options
        // )

        // let result = await res.json()
        // if (result) {
        //   if (result.error || result.isError) {
        //     setSnackbar({
        //       show: true,
        //       status: 'error',
        //       message: 'Payment did not process'
        //     })
        //   } else {
        //     toggleSnackbar({
        //       show: true,
        //       status: 'success',
        //       message: 'You are successfully registered'
        //     })
        //     setDialogName(name)
        //     setSuccessDialog(true)
        //     setOtpSent(false)
        //     setEmail('')
        //     setNumber('')
        //     setOtp('')
        //     setName('')
        //     try {
        //       let eventAction = 'Register Now Success'
        //       handleAnalytics('paymentSuccess') //oldevent
        //       handleAnalytics('RegisterNowSuccess', eventAction)
        //     } catch (e) {
        //       console.log('error', e)
        //     }
        //     {
        //       props?.redirectToDashboard && navigateToHome()
        //     }
        //   }
        // }
      }
    } catch (error) {
      setSnackbar({
        show: true,
        status: "error",
        message: "Something went wrong while confirming payment",
      });
    }
  };

  const razorPayDismissHandler = () => {
    setSnackbar({
      show: true,
      status: "warning",
      message: "Payment was not completed",
    });
  };
  return (
    <>
      <CustomButton onClick={onClick} {...props}>
        {props.text}
      </CustomButton>
      <Crypto open={open} onClose={handleClose} crypoData={crypoData} />
      {snackbar.show ? (
        <SnackBar {...snackbar} onClose={toggleSnackbar} />
      ) : null}
    </>
  );
}
