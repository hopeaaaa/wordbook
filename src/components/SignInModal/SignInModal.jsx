import { useNavigate } from "react-router-dom";
import "../SignInModal/SignInModal.scss";

function SignInModal({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="signin__overlay">
      <div className="signin__content-container">
        <div className="signin__header">
          <button className="signin__closebtn" onClick={onClose}>
            x
          </button>
        </div>
        <div className="signin__title">Sign Up / Log In</div>
        <form action="" className="signin__form">
          <input
            type="text"
            placeholder="Username"
            className="signin__username-input"
          />
          <button className="signin__btn">Enter</button>
          <input
            type="email"
            placeholder="Email"
            className="signin__email-input"
          />
          <button className="signin__btn">Enter</button>
          <input
            type="password"
            placeholder="Password"
            className="signin__password-input"
          />
          <button
            className="signin__e-btn"
            onClick={() => navigate("/translator/users/1")}
          >
            Sign Up
          </button>
          <button
            className="signin__e-btn"
            onClick={() => navigate("/translator/users/1")}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignInModal;
