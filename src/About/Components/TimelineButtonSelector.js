const TimelineButtonSelector = ({
  className,
  isProfessional,
  isPersonal,
  setProfessional,
  setPersonal,
  textButton,
}) => {
  return (
    <button
      className={className}
      onClick={() => {
        setProfessional(isProfessional);
        setPersonal(isPersonal);
      }}
    >
      {textButton}
    </button>
  );
};

export default TimelineButtonSelector;
