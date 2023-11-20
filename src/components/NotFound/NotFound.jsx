import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; 

const NotFound = () => {
  const [email, setEmail] = useState('');
  const [newPasscode, setNewPasscode] = useState('');
  const [confirmNewPasscode, setConfirmNewPasscode] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'newPasscode') {
      setNewPasscode(value);
    } else if (name === 'confirmNewPasscode') {
      setConfirmNewPasscode(value);
    }
  };

  const handleSubmit = () => {

    setSuccessMessage('Password changed successfully');
    setEmail('');
    setNewPasscode('');
    setConfirmNewPasscode('');
  };

  const handleToggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="not-found-container">
      <h1>404 - Not Found</h1>
      <p>The page you are looking for might not exist.</p>

      <h2>Reset Password</h2>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Email"
        name="email"
      />
      <div className="password-input">
        <input
          type={showNewPassword ? 'text' : 'password'}
          value={newPasscode}
          onChange={handleChange}
          placeholder="New Passcode"
          name="newPasscode"
        />
        <span className="eye-icon" onClick={handleToggleNewPassword}>
          {showNewPassword ? '👁' : '👁'}
        </span>
      </div>
      <div className="password-input">
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          value={confirmNewPasscode}
          onChange={handleChange}
          placeholder="Confirm New Passcode"
          name="confirmNewPasscode"
        />
        <span className="eye-icon" onClick={handleToggleConfirmPassword}>
          {showConfirmPassword ? '👁' : '👁'}
        </span>
      </div>

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>

      {successMessage && <p className="success-message">{successMessage}</p>}

      <Link to="/" className="back-to-home-link">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;