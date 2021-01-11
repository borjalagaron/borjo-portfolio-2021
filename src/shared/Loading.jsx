import borjoLogo from 'assets/images/logo/borjo-logo.svg';
import './Loading.css';
const Loading = () => {
  return (
    <div className="Loading">
      <img
        src={borjoLogo}
        width="40"
        height="40"
        className="loading-logo"
        alt="Logo"
      />
    </div>
  );
};

export default Loading;
