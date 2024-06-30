// Board.js
import React from "react";
import TaskList from "./TaskList";
import {
  backlogItems,
  designedItems,
  inProgressItems,
  toDoItems,
} from "@/constant/const";

const Board = () => {
  return (
    <div className="p-4 h-screen overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <div className="flex space-x-4">
        <TaskList title="Backlog" items={backlogItems} />
        <TaskList title="To do" items={toDoItems} />
        <TaskList title="In progress" items={inProgressItems} />
        <TaskList title="Designed" items={designedItems} />
      </div>
    </div>
  );
};

export default Board;

// components/Board.tsx
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import TaskList from "./TaskList";
// import {
//   backlogItems,
//   toDoItems,
//   inProgressItems,
//   designedItems,
// } from "@/constant/const";
// import { v4 as uuidv4 } from "uuid";

// const Board = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [boardId, setBoardId] = useState<string>(id as string);

//   useEffect(() => {
//     if (!boardId) {
//       const newBoardId = uuidv4();
//       router.replace(`/${newBoardId}`);
//       setBoardId(newBoardId);
//     }
//   }, [boardId, router]);

//   return (
//     <div className="p-4 h-screen overflow-auto">
//       <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
//       <div className="flex space-x-4">
//         <TaskList title="Backlog" items={backlogItems} />
//         <TaskList title="To do" items={toDoItems} />
//         <TaskList title="In progress" items={inProgressItems} />
//         <TaskList title="Done" items={designedItems} />
//       </div>
//     </div>
//   );
// };

// export default Board;
