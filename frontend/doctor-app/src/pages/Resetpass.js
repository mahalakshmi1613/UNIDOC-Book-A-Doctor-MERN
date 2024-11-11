import React from 'react';
import "../css/resetpass.css"

const Resetpass = () => {
  // Function to handle the password reset
  const resetPassword = () => {
    // Logic to handle password reset (e.g., validation, API call)
    alert('Password reset requested');
  };

  return (
    <div>
      <div className="container">
        <h2>Reset Password</h2>
        <input type="text" id="username" placeholder="Username" required />
        <input type="password" id="new-password" placeholder="New Password" required />
        <input type="password" id="confirm-new-password" placeholder="Confirm New Password" required />
        <button onClick={resetPassword}>Reset Password</button>
      </div>
    </div>
  );
};

export default Resetpass;
