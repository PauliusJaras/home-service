import { Link } from "react-router-dom";
import { routes } from "../../router/routes";

export default function LoginForm() {
  return (
    <form className="login-form">
      <h3>Login</h3>
      <fieldset>
        <label htmlFor="username">Username</label>
        <input id="username" placeholder="Type your username" type="text" />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <input id="password" placeholder="Type your password" type="password" />
      </fieldset>
      <button className="main-button">Login</button>
      <Link to={routes.register}>Don&apos;t own an account? Signup!</Link>
    </form>
  );
}
