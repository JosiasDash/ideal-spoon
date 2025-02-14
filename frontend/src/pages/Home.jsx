import { Link } from 'react-router-dom';
// import { Navbar } from '../components/Navbar';
import '../styles/Home.css';

export function Home() {
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      
      <main className="home-content">
        <div className="text-center">
          <h1 className="home-title">
            Welcome to <span className="highlight">MyCodingPILOT</span>
          </h1>
          
          <p className="home-subtitle">
            Streamline your development workflow, collaborate with other developers, and take your coding projects to new heights with our comprehensive platform.
          </p>

          <div className="button-group">
            <Link to="/login" className="btn primary">Get Started</Link>
            <Link to="/signup" className="btn secondary">Sign up</Link>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <h3>Collaborative Development</h3>
            <p>Work seamlessly with your team members, share code, and manage projects efficiently in one centralized platform.</p>
          </div>

          <div className="feature-card">
            <h3>Project Management</h3>
            <p>Keep track of your projects, set milestones, and monitor progress with our intuitive project management tools.</p>
          </div>

          <div className="feature-card">
            <h3>Code Review</h3>
            <p>Improve code quality through peer reviews, automated checks, and comprehensive documentation features.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
