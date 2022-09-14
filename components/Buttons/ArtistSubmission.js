import * as React from "react";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";

const pink = {
  500: "#E33F84",
  600: "#e7106a",
  700: "#E33F84",
};

const CustomButtonRoot = styled("span")`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 20px;
  background-color: ${pink[500]};
  padding: 12px 48px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  width: 250px;
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

export default function ArtistSubmission() {
  return (
    <CustomButton
      onClick={() => {
        window.open("https://pob6uzd6wp1.typeform.com/to/lZVwF1Ca");
      }}
    >
      Artist Submission
    </CustomButton>
  );
}
