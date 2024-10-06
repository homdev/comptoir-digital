const IntroduceJob = ({ icon, title }) => {
  return (
    <li className="flex items-center text-regular">
      {icon}
      <span className="text-white">{title}</span>
    </li>
  );
};

export default IntroduceJob;
