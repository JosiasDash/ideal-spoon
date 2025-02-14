import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { loginSchema } from '../lib/schemas';
import Logo from '../assets/logo.png';
import '../styles/Login.css';

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      // TODO: Implement login API call
      console.log('Login data:', data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img src={Logo} alt="Logo" />
          <h2>Streamline, collaborate and succeed</h2>
          <p>Enter your credentials to access your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              {...register('email')}
              type="email"
              placeholder="john@example.com"
              className="input-field"
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              {...register('password')}
              type="password"
              placeholder="••••••••"
              className="input-field"
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>

          <div className="form-actions">
            <div className="remember-me">
              <input
                id="remember-me"
                type="checkbox"
                className="checkbox"
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="forgot-password">
              <a href="#" className="forgot-password-link">Forgot password?</a>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button"
          >
            {isSubmitting ? 'Connexion...' : 'Sign in'}
          </button>
        </form>

        <div className="divider">
          <div className="divider-line"></div>
          <span className="divider-text">or</span>
        </div>

        <div className="signup-link">
          <Link
            to="/signup"
            className="signup-link-text"
          >
            Sign up if you don't have an account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
