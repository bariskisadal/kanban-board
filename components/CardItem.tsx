import React from "react";

interface CardItemProps {
  title?: string;
  description?: string;
  category: string;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  description,
  category,
}) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "new feature":
        return "bg-purple-500";
      case "formatting":
        return "bg-blue-500";
      case "note interface":
        return "bg-indigo-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      className={`p-4 mb-4 rounded-md text-white ${getCategoryColor(category)}`}
    >
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardItem;
