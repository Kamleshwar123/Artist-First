import * as React from "react";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

const pink = {
  500: "#FFFFFF",
  600: "#E7106A",
  700: "#E33F84",
};

const CustomButtonRoot = styled("span")`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 20px;
  background-color: ${pink[500]};
  padding: 12px 24px;
  border-radius: 8px;
  color: black;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  width: 414px;
  max-width: 80vw;
  margin: auto;
  margin-top: 25px;
  text-align: center;
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

export default function EarlyAccess() {
  return (
    <CustomButton
      onClick={() => {
        window.open("https://pob6uzd6wp1.typeform.com/to/HrJ9AJMQ");
      }}
    >
      Sign Up For Early Access
    </CustomButton>
  );
}
