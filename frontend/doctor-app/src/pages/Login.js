import React from 'react'
import "../css/login.css"

const Login = () => {
    let isLogin = true;
    const users = {};
  
    function toggleForm() {
      isLogin = !isLogin;
      document.getElementById('form-title').textContent = isLogin ? 'Login' : 'Register';
      document.querySelector('button').textContent = isLogin ? 'Login' : 'Register';
      document.querySelector('.switch').textContent = isLogin ? "Don't have an account? Register" : "Already have an account? Login";
    }
  
    function handleSubmit() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      if (isLogin) {
        // Login process
        if (users[username] && users[username] === password) {
          alert('Login successful!');
        } else {
          alert('Invalid username or password.');
        }
      } else {
        // Registration process
        if (users[username]) {
          alert('Username already exists!');
        } else {
          users[username] = password;
          alert('Registration successful! Please log in.');
          toggleForm();
        }
      }
    }
    return (
        <div>
            <div className="container" id="auth-container">
                <h2 id="form-title">Login</h2>

                <input type="text" id="username" placeholder="Username" required />
                <input type="password" id="password" placeholder="Password" required />
                <div className="password">
                    <a href="resetpass.html">Forget Password</a>
                </div>
                <button onClick={handleSubmit}>Login</button>
                <div className="switch" onClick={toggleForm}>Don't have an account?</div>
                <div className="doc"><a href="signup.html">Sign Up</a></div>
            </div>
        </div>
    );
};

export default Login;