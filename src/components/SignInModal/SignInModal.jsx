import { useNavigate } from "react-router-dom";
import "../SignInModal/SignInModal.scss";

function SignInModal({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="signin__overlay">
      <div className="signin__content-container">
        <button className="signin__closebtn" onClick={onClose}>
          x
        </button>
        <div className="signin__form-div">
          <div className="signin__title">Sign Up / Log In</div>
          <form action="" className="signin__form">
            <input
              type="text"
              placeholder="Username"
              className="signin__username-input"
            />
            <input
              type="email"
              placeholder="Email"
              className="signin__email-input"
            />
            <input
              type="password"
              placeholder="Password"
              className="signin__password-input"
            />
            <button
              className="signin__btn"
              onClick={() => navigate("/translator/users/1")}
            >
              Log In
            </button>
            <p className="signin__forgot-btn">Forgot Password?</p>
            <hr />
            <p className="signin__create-btn">
              Don't have an account? Create one
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;
