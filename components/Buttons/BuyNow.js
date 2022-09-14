import React, { useEffect } from "react";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import PaymentModal from "../Payment/PaymentModal";
import auth from "../Layout/util/auth";
import eventBus from "../../util/eventBus";
import router, { useRouter } from "next/router";
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

export default function BuyNow(props) {
  const router=useRouter();
  const handleOpen = (e) => {
    e.preventDefault();
    const r = auth();
    if (!open) {
      if (r.token) {
        setOpen(true);
        console.log("yessss")
        router.push(props?.nft_slug);
        return;
      } else {
        eventBus.dispatch("openLoginModal", { function_name: "unique" });
      }
    }
  };
  useEffect(() => {
    eventBus.on("unique", () => {
      console.log("am calling opening");
      if (open) {
        return false;
      }
      if (!open) {
        setOpen(true);
        return;
      }
    });
    return () => {
      eventBus.remove("unique");
    };
  }, []);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <CustomButton onClick={handleOpen} {...props}>
        Buy Now
      </CustomButton>
      <PaymentModal id={props.id} open={open} onClose={handleClose} />
    </>
  );
}
