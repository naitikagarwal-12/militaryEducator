const Button = ({ icon, classname, children, event }) => {
  return (
    <div className={`${classname} rounded-lg sm:rounded-xl py-2 px-1 sm:py-1.5 sm:px-3`}>
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
