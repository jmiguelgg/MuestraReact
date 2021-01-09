import { useState } from "react";
import { useRouter } from 'next/router';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [messageError, setMessageError] = useState(false);
  const valuesToCompare = {
    userName: 'jose',
    password: 'miguel',
  };
  const route = useRouter();

  const validateLogin = () => {
    setMessageError(false);
    if (userName === valuesToCompare.userName && password === valuesToCompare.password){
      route.push('/');
    }
    else setMessageError(true);
  };

  return (
    <div>
      <label>user name: </label>
      <input type='text' value={userName} onChange={(text) => setUserName(text.target.value)} />
      <label>password</label>
      <input type='password' value={password} onChange={(pass) => setPassword(pass.target.value)} />
      <button onClick={() => validateLogin()}>Login</button>
      {messageError && (
        <div>
          <h2>Your password is invalid</h2>
        </div>
      )}
    </div>
  );
};

export default Login;
