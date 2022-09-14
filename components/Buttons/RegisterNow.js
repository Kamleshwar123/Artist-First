import * as React from "react";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import RegisterInterest from "../Modals/RegisterInterest";
const CustomButtonRoot = styled("span")`
  font-family: Inter;
  font-weight: bold;
  font-size: 20px;
  background: linear-gradient(
    90.48deg,
    #e14084 3.73%,
    #3454fa 53.09%,
    #54b5bb 96.58%
  );
  padding: 8px 44px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  width: fit-content;
  margin-top: 15px;
  text-align: center;
  margin: 5px;

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

export default function RegisterNow({id}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <CustomButton onClick={handleOpen}>Register Interest Now</CustomButton>
      <RegisterInterest id={id} open={open} onClose={handleClose} />
    </>
  );
}
