import "./App.css";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
function App() {
  return (
    <center>
      <form className="login-form">
        <h1>
          <span style={{ fontWeight: "lighter" }}>mywebsite</span>.com
        </h1>
        <h2>welcome</h2>
        <FormGroup>
          <label>Email</label>
          <input type="Email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <label>password</label>
          <input type="password" placeholder="password" />
        </FormGroup>
        <button className="btn-lg btn-dark btn-black">Log In</button>
        <div className="text-center pt-3">
          Or continue with your social account
        </div>
        <FacebookLoginButton className="mt-3 mb-3" />
        <div className="text-center">
          <a href="/sign-up">Sign Up</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">forgot password </a>
        </div>
      </form>
    </center>
  );
}

export default App;
