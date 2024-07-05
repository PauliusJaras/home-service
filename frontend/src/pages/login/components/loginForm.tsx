import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import { routes } from "../../../router/routes";

export default function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserContext);

  const handleSubmit = () => {
    login({ username, password });
    navigate(routes.home);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h3>Login</h3>
      <fieldset>
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          minLength={3}
          required
          id="username"
          placeholder="Type your username"
          type="text"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          minLength={3}
          required
          id="password"
          placeholder="Type your password"
          type="password"
        />
      </fieldset>
      <button type="submit" className="main-button">
        Login
      </button>
      <Link to={routes.register}>Don&apos;t own an account? Signup!</Link>
    </form>
  );
}
