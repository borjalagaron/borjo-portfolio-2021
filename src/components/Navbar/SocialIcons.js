import Cv from '../../images/BorjaLagaron_Lebenslauf.pdf';
import SocialIcon from './SocialIcon';

import './SocialIcons.css';

const SocialIcons = (props) => {
  const items = [
    {
      href: 'https://www.linkedin.com/in/borjalagaron/',
      fontAwesome: 'fab fa-linkedin-in',
    },
    { href: Cv, fontAwesome: 'far fa-file' },
    {
      href:
        'mailto:Borja.lagaron@me.com?subject=Subject&body=Linea%201%0D%0ALinea%202',
      fontAwesome: 'fas fa-envelope',
    },
  ];

  return (
    <div className={props.isNavbar ? 'social-icons__navbar' : 'social-icons'}>
      {items.map((item) => {
        return (
          <SocialIcon
            isNavbar={props.isNavbar}
            href={item.href}
            fontAwesome={item.fontAwesome}>
          </SocialIcon>
        );
      })}
    </div>
  );
};

export default SocialIcons;
