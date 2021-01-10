const SocialIcon = ({ isNavbar, href, fontAwesome }) => {
    console.log(isNavbar);
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      className={isNavbar ? 'social-icon__navbar' : 'social-icon'}
    >
      {' '}
      <i className={fontAwesome}></i>
    </a>
  );
};

export default SocialIcon;
