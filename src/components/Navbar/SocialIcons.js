import Cv from '../../images/BorjaLagaron_Lebenslauf.pdf';

import './SocialIcons.css';

const SocialIcons = (props) => {
  return (
    <div className={props.isNavbar ? 'social-icons__navbar' : 'social-icons'}>
      <a
        href="https://www.linkedin.com/in/borjalagaron/"
        rel="noreferrer"
        target="_blank"
        className={props.isNavbar ? 'social-icon__navbar' : 'social-icon'}
      >
        {' '}
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a
        href={Cv}
        rel="noreferrer"
        target="_blank"
        className={props.isNavbar ? 'social-icon__navbar' : 'social-icon'}
      >
        {' '}
        <i className="far fa-file"></i>
      </a>
      <a
        href="mailto:Borja.lagaron@me.com?subject=Subject&body=Linea%201%0D%0ALinea%202"
        rel="noreferrer"
        target="_blank"
        className={props.isNavbar ? 'social-icon__navbar' : 'social-icon'}
      >
        {' '}
        <i className="fas fa-envelope"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
