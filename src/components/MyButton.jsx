const MyButton = ({ label, fn }) => {
  return <button onClick={fn}>{label}</button>;
};

export default MyButton;
