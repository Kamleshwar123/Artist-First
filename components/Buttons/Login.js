import { Button } from "@mui/material";
import { withStyles } from "@mui/styles";

const Login = withStyles((theme) => ({
  root: {
    color: "#fff",
    //   backgroundColor: grey[400],
    border: "1px solid #FFFFFF",
    width: "100px",
    padding: "5px",
    textTransform: "none",
    borderRadius: "12px",
    "&:hover": {
      // backgroundColor: grey[700],
    },
  },
}))((props) => <Button {...props} />);

export default Login;
