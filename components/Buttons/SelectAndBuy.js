import * as React from "react";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

const pink = {
  500: "#ffffff",
  600: "#ffd4d4",
  700: "#ffd4d5",
};

const CustomButtonRoot = styled("span")`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 14px;
  background-color: ${pink[500]};
  padding: 8px;
  border-radius: 8px;
  color: black;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  width: 414px;
  margin: auto;
  margin-top: 25px;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(255, 79, 79, 0.75);
  &:hover {
    background-color: ${pink[600]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${pink[700]};
  }

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

export default function SelectAndBuy() {
  return <CustomButton>Select And Buy</CustomButton>;
}
