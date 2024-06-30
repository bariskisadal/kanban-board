// TaskList.js
import React from "react";
import CardItem from "./CardItem";

const TaskList = ({ title, items }) => {
  return (
    <div className="w-1/5 p-4 bg-gray-800 rounded-md">
      <h2 className="text-white font-bold mb-4">{title}</h2>
      {items.map((item, index) => (
        <CardItem
          key={index}
          title={item.title}
          description={item.description}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default TaskList;
