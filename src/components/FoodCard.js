const FoodCard = ({ title, description, image }) => {
  return (
    <div className="bg-gray-300 rounded-lg shadow-lg p-4 m-2 w-64">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h3 className="text-lg text-black font-bold mt-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default FoodCard;
