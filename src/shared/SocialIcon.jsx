const SocialIcon = ({ isNavbar, href, ariaLabel, fontAwesome }) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      rel="noreferrer"
      target="_blank"
      className={isNavbar ? 'social-icon__navbar' : 'social-icon'}
      title={ariaLabel}
    >
      {' '}
      <i className={fontAwesome}></i>
    </a>
  );
};

export default SocialIcon;
