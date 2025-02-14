import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { signupSchema } from '../lib/schemas';
import Logo from '../assets/logo.png';
import '../styles/Signup.css';

export function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      // TODO: Implement signup API call
      console.log('Signup data:', data);

      // Rediriger vers la page login après un signup réussi
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <div className="signup-card">
          <div className="text-center space-y-2">
              <img src={Logo} alt="Logo" />
            <h2 className="title">Create your account</h2>
            <p className="subtitle">Join us and start your journey today</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form-fields">
              <div className="form-group">
                <label htmlFor="email" className="label">Email address</label>
                <input
                  id="email"
                  {...register('email')}
                  type="email"
                  placeholder="john@example.com"
                  className="input"
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="label">Phone number</label>
                <div className="phone-group">
                  <select className="phone-select" defaultValue="+33">
                    {/* <option value="+33">🇫🇷 +33</option> */}
                    <option value="+33">🇫🇷 +229</option>
                  </select>
                  <input
                    id="phone"
                    {...register('phoneNumber')}
                    type="tel"
                    placeholder="01 96 66 47 34"
                    className="input"
                  />
                  {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="username" className="label">Username</label>
                <input
                  id="username"
                  {...register('username')}
                  type="text"
                  placeholder="johndoe"
                  className="input"
                />
                {errors.username && <p className="error-message">{errors.username.message}</p>}
              </div>

              <div className="form-group">
                <label htmlFor="password" className="label">Password</label>
                <input
                  id="password"
                  {...register('password')}
                  type="password"
                  placeholder="••••••••"
                  className="input"
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}
              </div>
            </div>

            <div className="submit-section">
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? 'Inscription...' : 'Sign up'}
              </button>

              <p className="terms-text">
                By signing up, you agree to our{' '}
                <a href="#" className="link">Terms of Service</a> and{' '}
                <a href="#" className="link">Privacy Policy</a>
              </p>
            </div>
          </form>

          <div className="divider">
            <div className="divider-line"></div>
            <span className="or-text">or</span>
          </div>

          <div className="text-center">
            <Link to="/login" className="login-link">
              Sign in if you already have an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
