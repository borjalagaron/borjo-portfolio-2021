
const TimelineButtonSelector = ({
  isProfessional,
  isPersonal,
  setProfessional,
  setPersonal,
  textButton,
}) => {
  return (
    <button
      className="time"
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
