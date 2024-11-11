import React from 'react'
import "../css/signup.css"

const SignUp = () => {

    function signup() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
      
        // Check if fields are filled
        if (!username || !password || !confirmPassword) {
          alert('Please fill out all fields.');
          return;
        }
      
        // Check if passwords match
        if (password !== confirmPassword) {
          alert('Passwords do not match.');
          return;
        }
      
        // Check if username already exists
        const users = JSON.parse(localStorage.getItem('users')) || {};
        if (users[username]) {
          alert('Username already exists. Choose a different one.');
          return;
        }
      
        // Save the user in local storage
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
      
        alert('Registration successful! You can now log in.');
         window.location.href = 'login.html';
      }
      return (
        <div>
          <div className="container">
            <h2>Sign Up</h2>
            <input type="text" id="username" placeholder="Username" required />
            <input type="password" id="password" placeholder="Password" required />
            <input type="password" id="confirm-password" placeholder="Confirm Password" required />
            <button onClick={signup}>Sign Up</button>
          </div>
        </div>
      );
    };
    
    export default SignUp;