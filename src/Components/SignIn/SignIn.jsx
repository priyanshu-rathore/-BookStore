import React from "react";
import "./SignIn.css";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { div } from "@mui/material";
import { signInService } from "../../Services/DataService";
const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const SignIn = ({ setDisplay }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [regex, setRegex] = React.useState({
    emailHelper: "",
    emailError: false,
    passwordError: false,
  });
  const [signIn, setSignIn] = React.useState({ email: "", password: "" });
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  React.useEffect(() => {}, []);

  const submit = async () => {
    let email = emailRegex.test(signIn.email);
    let password = passwordRegex.test(signIn.password);

    if (email === false) {
      setRegex((prevState) => ({
        ...prevState,
        emailHelper: "Enter correct email",
        emailError: true,
      }));
    } else {
      setRegex((prevState) => ({
        ...prevState,
        emailHelper: "",
        emailError: false,
      }));
    }

    if (password === false) {
      setRegex((prevState) => ({ ...prevState, passwordError: true }));
    } else {
      setRegex((prevState) => ({ ...prevState, passwordError: false }));
    }

    if (email && password) {
      let response = await signInService(signIn);
      console.log(response);
      if (response.status !== 200) {
        alert("Wrong Email Or Password");
      }

      localStorage.setItem("accessToken", response.data.result.accessToken);
      if (response.status === 200) {
        window.location.reload(true);
      }
    }
  };

  return (
    <div className="sign-in-main">
      <div
        className="sign-in-top"
        style={{
          display: "flex",
          width: "69%",
          justifyContent: "space-between",
        }}
      >
        <div className="sign-in-top-login">
          <h1>Login</h1>
          <div></div>
        </div>
        <div className="sign-in-top-sign-up" onClick={() => setDisplay(false)}>
          <h1>Signup</h1>
        </div>
      </div>
      <div className="sign-in-email">
        <TextField
          helperText={regex.emailHelper}
          error={regex.emailError}
          onChange={(e) =>
            setSignIn((prev) => ({ ...prev, email: e.target.value }))
          }
          id="outlined-basic"
          style={{ width: "19rem" }}
          size="small"
          label="Email Id"
          variant="outlined"
        />
      </div>
      <div className="sign-in-password">
        <FormControl
          sx={{ m: 1, width: "19rem" }}
          variant="outlined"
          size="small"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            error={regex.passwordError}
            onChange={(e) =>
              setSignIn((prev) => ({ ...prev, password: e.target.value }))
            }
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <div className="sign-in-forgot-password">
        <p style={{ color: "#9D9D9D" }}>Forgot Password ?</p>
      </div>
      <div className="sign-in-login-button">
        <Button
          onClick={submit}
          style={{
            width: "19rem",
            backgroundColor: "#A03037",
            textTransform: "capitalize",
          }}
          variant="contained"
        >
          Login
        </Button>
      </div>
      <div className="sign-in-or">
        <div className="sign-in-or-img"></div>
        <h2>OR</h2>
        <div className="sign-in-or-img"></div>
      </div>
      <div
        className="sign-in-social-login"
        style={{
          display: "flex",
          width: "70%",
          justifyContent: "space-between",
        }}
      >
        <Button
          style={{
            width: "",
            backgroundColor: "#4266B2",
            color: "white",
            fontSize: "12px",
          }}
          variant="contained"
        >
          Facebook
        </Button>
        <Button
          style={{
            width: "",
            backgroundColor: "#F5F5F5",
            fontSize: "12px",
            color: "black",
          }}
          variant="contained"
        >
          Google
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
