const Card = ({ image, button, content, heading }) => {
  return (
    <div className="bg-[#5d6532] rounded-2xl p-3 xl:min-h-100 lg:min-h-70 flex flex-col justify-between ring-2 ring-black/50">
      <img src={image} alt={image} className="rounded-2xl w-full object-cover h-35 mb-3 md:h-30" />
      <div className="bg-[#b0be64] rounded-2xl p-2 flex flex-col justify-between md:min-h-60 lg:min-h-50 xl:min-h-60">
        <div className="p-1">
          <p className="font-bold text-lg">{heading}</p>
          <p className="text-sm font-light mt-1">{content}</p>
        </div>
        <div className="flex justify-center items-center">{button}</div>
      </div>
    </div>
  );
};

export default Card;
