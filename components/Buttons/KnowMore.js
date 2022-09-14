import * as React from "react";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

const CustomButtonRoot = styled("span")`
  font-family: Inter;
  font-weight: bold;
  font-size: 20px;
  background: transparent;
  padding: 8px 44px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  width: fit-content;
  margin-top: 15px;
  text-align: center;
  border: solid 1px white;
  margin: 5px;
  &:hover {
    background-color: transparent;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: transparent;
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

export default function RegisterNow() {
  return (
    <CustomButton
      onClick={() => {
        window.open("/nft/jind-mahive","_self");
      }}
    >
      Know More{" "}
    </CustomButton>
  );
}
