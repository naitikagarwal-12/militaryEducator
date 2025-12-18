const MilitaryCards = ({ classname, imgClass, image, button }) => {
  return (
    <div
      className={`${classname} flex flex-col justify-center items-center bg-[#5c4e41] ring-2 ring-black/60 rounded-2xl p-1 m-2`}
    >
      <img src={image} alt={image} className={`${imgClass} m-3`}></img>
      <div className="flex justify-center items-center my-3">{button}</div>
    </div>
  );
};

export default MilitaryCards;
