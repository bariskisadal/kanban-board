import {
  backlogItems,
  designedItems,
  inProgressItems,
  toDoItems,
} from "@/constant/const";
import TaskList from "./TaskList";

interface BoardProps {
  boardId: string;
}

export default function Board({ boardId }: BoardProps) {
  return (
    <div className="p-4 h-screen overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Kanban Board {boardId}</h1>
      <div className="flex space-x-4">
        <TaskList title="Backlog" items={backlogItems} />
        <TaskList title="To do" items={toDoItems} />
        <TaskList title="In progress" items={inProgressItems} />
        <TaskList title="Designed" items={designedItems} />
      </div>
    </div>
  );
}
