import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password }, navigate);
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input placeholder='enter email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p>Password</p>
        <input placeholder= "enter password" type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br/>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
