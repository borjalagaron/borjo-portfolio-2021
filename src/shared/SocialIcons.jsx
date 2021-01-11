import Cv from 'assets/resume/BorjaLagaron_Lebenslauf.pdf';
import SocialIcon from './SocialIcon';

import './SocialIcons.css';

const SocialIcons = (props) => {
  const items = [
    {
      ariaLabel: 'LinkedIn',
      href: 'https://www.linkedin.com/in/borjalagaron/',
      fontAwesome: 'fab fa-linkedin-in',
    },
    {
      ariaLabel: 'Resume',
      href: Cv,
      fontAwesome: 'far fa-file',
    },
    {
      ariaLabel: 'Mail',
      href:
        'mailto:test-email@me.com?subject=Subject&body=Linea%201%0D%0ALinea%202',
      fontAwesome: 'fas fa-envelope',
    },
    {
      ariaLabel: 'Github',
      href:
        'https://github.com/borjalagaron/borjo-portfolio-2021',
      fontAwesome: 'fab fa-github',
    },
  ];

  return (
    <div className={props.isNavbar ? 'social-icons__navbar' : 'social-icons'}>
      {items.map((item) => {
        return (
          <SocialIcon
            isNavbar={props.isNavbar}
            href={item.href}
            ariaLabel={item.ariaLabel}
            fontAwesome={item.fontAwesome}
          ></SocialIcon>
        );
      })}
    </div>
  );
};

export default SocialIcons;
