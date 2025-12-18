const Button = ({ icon, classname, children, event }) => {
  return (
    <div className={`${classname} rounded-xl py-1.5 px-3`}>
      <button
        onClick={event}
        className="flex justify-center items-center gap-1 font-bold"
      >
        <div>{icon}</div>
        <div>{children}</div>
      </button>
    </div>
  );
};

export default Button;
