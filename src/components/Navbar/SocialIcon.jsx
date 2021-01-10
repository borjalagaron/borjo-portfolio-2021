const SocialIcon = ({ isNavbar, href, name, fontAwesome }) => {
    console.log(isNavbar);
  return (
    <a
      href={href}
      aria-label={name}
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
