import React, { useState } from "react";
import CardItem from "./CardItem";

const TaskList = ({ title, items }) => {
  const [taskItems, setTaskItems] = useState(items);
  const [showInputs, setShowInputs] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddTask = () => {
    if (newTitle && newDescription) {
      const newTask = {
        title: newTitle,
        description: newDescription,
      };
      setTaskItems([...taskItems, newTask]);
      setNewTitle("");
      setNewDescription("");
      setShowInputs(false);
    }
  };

  return (
    <div className="w-full md:w-1/4 p-4 bg-gray-800 rounded-md relative mb-4 md:mb-0">
      <h2 className="text-white font-bold mb-4">{title}</h2>
      {taskItems.map((item, index) => (
        <CardItem
          key={index}
          title={item.title}
          description={item.description}
          category={item.category}
        />
      ))}
      {showInputs && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="mb-2 p-2 w-full rounded-md"
          />
          <input
            type="text"
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="mb-2 p-2 w-full rounded-md"
          />
          <button
            onClick={handleAddTask}
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Add
          </button>
        </div>
      )}
      {!showInputs && (
        <button
          onClick={() => setShowInputs(true)}
          className="absolute bottom-2 left-4 bg-blue-500 text-white p-2 rounded-full mt-4"
        >
          +
        </button>
      )}
    </div>
  );
};

export default TaskList;
