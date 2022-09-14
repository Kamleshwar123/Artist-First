import * as React from "react";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";

const MyButton = styled(Button)({
  background:
    "linear-gradient(90.48deg, #e14084 3.73%,#3454fa 53.09%,#54b5bb 96.58%)",
  border: 0,
  borderRadius: "8px",
  color: "white",
  height: 48,
  padding: "0 30px",
  display: "flex",
  justifyContent: "center",
  margin: "20px auto ",
  width: "100%",

  "&:hover": {
    boxShadow: "0 1px 2px 2px #54b5bb",
  },
});

export default function StyledComponents(props) {
  return <MyButton {...props}></MyButton>;
}
