import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  /*===== RegisterState =====*/
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  /*===== HandleRegister =====*/
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    let currentErrors = { name: '', email: '', password: '', confirmPassword: '' };
    let hasError = false;

    if (regPassword !== regConfirmPassword) {
      currentErrors.confirmPassword = "Passwords do not match! Please verify.";
      hasError = true;
    }

    if (regPassword.length < 6) {
      currentErrors.password = "Password must be at least 6 characters.";
      hasError = true;
    }

    if (hasError) {
      setErrors(currentErrors);
      return;
    }

    alert(`Welcome to TechNexus, ${regName}!\nYour account has been verified.`);

    setRegName('');
    setRegEmail('');
    setRegPassword('');
    setRegConfirmPassword('');
    setErrors({ name: '', email: '', password: '', confirmPassword: '' });

    navigate('/');
  };

  /*===== Particles =====*/
  const particleClasses = ['pr1', 'pr2', 'pr3', 'pr4', 'pr5', 'pr6', 'pr7', 'pr8', 'pr9', 'pr10'
    , 'pr11', 'pr12', 'pr13', 'pr14', 'pr15', 'pr16', 'pr17', 'pr18', 'pr19', 'pr20'];


  return (
    <>
      <main className="register-page">
        {particleClasses.map((pr, index) => (
          <div key={`elec-p-${index}`} className={`particles ${pr}`}></div>
        ))}

        <article className="register-board">
          <div className="register-header">
            <h2 className="register-title"><i className="bi bi-person-plus-fill"></i> Create Account</h2>
            <div className="register-line"></div>
          </div> {/* register-header */}

          <form onSubmit={handleRegisterSubmit} className="register-form">

            <div className="register-form-group floating-group">
              <input
                type="text"
                className={`register-form-input ${errors.name ? 'input-error-border' : ''}`}
                placeholder=" "
                value={regName}
                onChange={(e) => { setRegName(e.target.value); setErrors(p => ({ ...p, name: '' })); }}
                required
              />
              <label className="register-form-label">Full Name</label>
              {errors.name && <span className="inline-error-text"><i className="bi bi-exclamation-triangle"></i> {errors.name}</span>}
            </div> {/* register-form-group/floating-group */}

            <div className="register-form-group floating-group">
              <input
                type="email"
                className={`register-form-input ${errors.email ? 'input-error-border' : ''}`}
                placeholder=" "
                value={regEmail}
                onChange={(e) => { setRegEmail(e.target.value); setErrors(p => ({ ...p, email: '' })); }}
                required
              />
              <label className="register-form-label">Email Address</label>
              {errors.email && <span className="inline-error-text"><i className="bi bi-exclamation-triangle"></i> {errors.email}</span>}
            </div> {/* register-form-group/floating-group */}

            <div className="register-form-group floating-group">
              <input
                type="password"
                className={`register-form-input ${errors.password ? 'input-error-border' : ''}`}
                placeholder=" "
                value={regPassword}
                onChange={(e) => { setRegPassword(e.target.value); setErrors(p => ({ ...p, password: '', confirmPassword: '' })); }}
                required
              />
              <label className="register-form-label">Password</label>
              {errors.password && <span className="inline-error-text"><i className="bi bi-exclamation-triangle"></i> {errors.password}</span>}
            </div> {/* register-form-group/floating-group */}

            <div className="register-form-group floating-group">
              <input
                type="password"
                className={`register-form-input ${errors.confirmPassword ? 'input-error-border' : ''}`}
                placeholder=" "
                value={regConfirmPassword}
                onChange={(e) => { setRegConfirmPassword(e.target.value); setErrors(p => ({ ...p, confirmPassword: '' })); }}
                required
              />
              <label className="register-form-label">Confirm Password</label>
              {errors.confirmPassword && <span className="inline-error-text"><i className="bi bi-exclamation-triangle"></i> {errors.confirmPassword}</span>}
            </div> {/* register-form-group/floating-group */}

            <button type="submit" className="register-btn">
              Create Account
            </button>
          </form> {/* register-form */}

          <p className="register-back-home-text">
            By signing up, you agree to TechNexus Protocols.
            <br />
            <Link to="/"> Back to Home Page </Link>
          </p>

        </article> {/* register-board */}
      </main> {/* register-page */}
    </>
  );
}

export default Register;
