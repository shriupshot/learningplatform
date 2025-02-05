import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ closeLoginForm }) => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Close the login form before navigating to the register page.
    closeLoginForm();
    navigate('/user-types');
  };

  return (
    <div style={styles.container}>
      {/* Close Button */}
      <div style={styles.closeButton} onClick={closeLoginForm}>×</div>
      
      <h2 style={styles.title}>Welcome to</h2>
      <h1 style={styles.brand}>Skill Learn</h1>

      <button style={styles.socialButton}>
        Login with Google
      </button>

      <button style={styles.socialButton}>
        Login with Facebook
      </button>

      <div style={styles.divider}>or</div>

      <form style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          defaultValue="example@gmail.com"
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
        />

        <div style={styles.rememberForgot}>
          <label style={styles.rememberMe}>
            <input type="checkbox" /> Remember me
          </label>
          <button
            type="button"
            style={styles.forgotPassword}
            onClick={() => alert('Forgot Password')}
          >
            Forgot Password?
          </button>
        </div>

        <button type="submit" style={styles.loginButton}>Login</button>
      </form>

      <p style={styles.registerText}>
        Don't have an account?{' '}
        <button
          type="button"
          style={styles.registerLink}
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    position: 'relative', // For positioning the close button
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '30px',
    cursor: 'pointer',
    color: '#ff0000', // Red color for close button
  },
  title: {
    margin: '0',
    fontSize: '24px',
  },
  brand: {
    margin: '10px 0',
    fontSize: '32px',
    fontWeight: 'bold',
  },
  socialButton: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px',
    cursor: 'pointer',
  },
  divider: {
    margin: '20px 0',
    fontSize: '18px',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px',
  },
  rememberForgot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px 0',
  },
  rememberMe: {
    fontSize: '14px',
  },
  forgotPassword: {
    fontSize: '14px',
    color: '#007bff',
    background: 'none',
    border: 'none',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  loginButton: {
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
  },
  registerText: {
    marginTop: '20px',
    fontSize: '14px',
  },
  registerLink: {
    color: '#007bff',
    background: 'none',
    border: 'none',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

export default LoginForm;
