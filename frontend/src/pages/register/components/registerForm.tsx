import { Link } from "react-router-dom";
import { routes } from "../../../router/routes";

export default function RegisterForm() {
  return (
    <form className="register-form">
      <h3>Signup</h3>
      <fieldset>
        <label htmlFor="username">Username</label>
        <input placeholder="Type your username" id="username" type="text" />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <input placeholder="Type your password" id="password" type="password" />
      </fieldset>
      <fieldset>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          placeholder="Repeat your password"
          id="confirmPassword"
          type="password"
        />
      </fieldset>
      <button className="main-button">Register</button>
      <Link to={routes.login}>Already have an account? Login</Link>
    </form>
  );
}
